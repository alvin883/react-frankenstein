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
    const duration = -1000;
    const { result } = renderHook(() => useTimer({ duration }));
    expect(result.current).toBe(0);
  });

  it('Should fire onTimeout immediately if deadline has been passed on initial position', () => {
    const onTimeout = jest.fn();
    const duration = -1000;
    renderHook(() => useTimer({ duration, onTimeout }));
    expect(onTimeout).toHaveBeenCalledTimes(1);
  });

  it('Should fire onTimeout when deadline passed', () => {
    const onTimeout = jest.fn();
    const duration = 2;

    renderHook(() => useTimer({ duration, onTimeout }));
    expect(onTimeout).not.toHaveBeenCalled();

    act(() => {
      jest.runAllTimers();
    });

    expect(onTimeout).toHaveBeenCalledTimes(1);
  });

  it('Should clear timer on unmount', () => {
    const durationInSecond = 1;
    const spareInSecond = 1;

    const onTimeout = jest.fn();
    const duration = durationInSecond * 1000;
    const waitDuration = durationInSecond + spareInSecond;
    const hook = renderHook(() => useTimer({ duration, onTimeout }));

    expect(onTimeout).not.toHaveBeenCalled();
    hook.unmount();
    act(() => {
      jest.advanceTimersByTime(waitDuration * 1000);
    });
    expect(onTimeout).not.toHaveBeenCalled();
  });
});
