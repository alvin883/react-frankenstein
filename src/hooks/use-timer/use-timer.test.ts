import { act, renderHook } from '@testing-library/react-hooks';
import useTimer from './use-timer';

// Fix mockRestore on typescript
// https://remarkablemark.org/blog/2019/11/27/typescript-jest-mockrestore/
let spy: jest.SpyInstance;

describe('useTimer', () => {
  beforeEach(() => {
    jest.useFakeTimers();

    // How to mock requestAnimationFrame
    // https://github.com/facebook/jest/issues/5147#issuecomment-353274996
    // additional: https://imagicbell.github.io/front-end/2021/02/19/mock-requestanimationframe-in-jest.html
    spy = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: Function) => cb());
  });

  afterEach(() => {
    spy.mockRestore();
    jest.clearAllTimers();
  });

  it('Should not return value lower than zero', () => {
    const deadline = (new Date().getTime() - 1000) / 1000;
    const { result } = renderHook(() => useTimer({ deadline }));
    expect(result.current).toBe(0);
  });

  it('Should fire onTimeout immediately if deadline has been passed on initial position', () => {
    const onTimeout = jest.fn();
    const deadline = (new Date().getTime() - 1000) / 1000;
    renderHook(() => useTimer({ deadline, onTimeout }));
    expect(onTimeout).toHaveBeenCalledTimes(1);
  });

  it('Should fire onTimeout when deadline passed', () => {
    const durationInSecond = 1;
    const spareInSecond = 1;

    const onTimeout = jest.fn();
    const deadline = Math.floor(new Date().getTime() / 1000) + durationInSecond;
    const waitDuration = durationInSecond + spareInSecond;

    renderHook(() => useTimer({ deadline, onTimeout }));
    expect(onTimeout).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(waitDuration * 1000);
    });
    expect(onTimeout).toHaveBeenCalledTimes(1);
  });

  it('Should clear timer on unmount', () => {
    const durationInSecond = 1;
    const spareInSecond = 1;

    const onTimeout = jest.fn();
    const deadline = Math.floor(new Date().getTime() / 1000) + durationInSecond;
    const waitDuration = durationInSecond + spareInSecond;
    const hook = renderHook(() => useTimer({ deadline, onTimeout }));

    expect(onTimeout).not.toHaveBeenCalled();
    hook.unmount();
    act(() => {
      jest.advanceTimersByTime(waitDuration * 1000);
    });
    expect(onTimeout).not.toHaveBeenCalled();
  });
});
