import { fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useModal from './useModal';

it('Should work without ref', () => {
  const { result } = renderHook(() => useModal());
  act(() => result.current.open());
  expect(result.current).toBeDefined();
});

it('Should close on default', () => {
  const { result } = renderHook(() => useModal());
  expect(result.current.isOpen).toBe(false);
});

it('Should use initOpen if provided', () => {
  const { result } = renderHook(() => useModal({ isOpen: true }));
  expect(result.current.isOpen).toBe(true);
});

it('Should close on press esc key', () => {
  const { result } = renderHook(() => useModal());
  act(() => result.current.open());
  fireEvent.keyPress(document, { key: 'Escape', keyCode: 27 });
  expect(result.current.isOpen).toBe(false);
});

it('Should close on overlay clicked', () => {
  // TODO:
});
