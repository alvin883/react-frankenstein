import { useEffect, useState } from 'react';
import { useIsFirstMount } from '../use-is-first-mount';
import animationInterval from '../../utils/animation-interval';

type UseTimerType = (args: {
  /**
   * in milliseconds
   */
  duration: number;
  onTimeout?: () => void;
}) => number;

const useTimer: UseTimerType = ({ duration, onTimeout = () => {} }) => {
  if (!duration || typeof duration !== 'number') {
    console.error('Please pass `duration` value into useTimer');
  }

  const isFirstMount = useIsFirstMount();
  const initDeadline = new Date().getTime() + duration;
  const [deadline, setDeadline] = useState(initDeadline);
  const getNewTime = () => Math.max(deadline - new Date().getTime(), 0);
  const [remainingTime, setRemainingTime] = useState(getNewTime());

  /**
   * @param {AbortController} controller
   */
  const onTick = (controller: AbortController) => {
    const newTime = getNewTime();
    const isTimeout = newTime <= 0;
    setRemainingTime(newTime);
    if (isTimeout) {
      controller.abort();
      onTimeout();
    }
  };

  // Update deadline if duration changed
  useEffect(() => {
    if (isFirstMount) return;
    setDeadline(new Date().getTime() + duration);
    setRemainingTime(getNewTime());
  }, [duration]);

  useEffect(() => {
    // Check if it already reach the deadline before setting interval
    if (getNewTime() <= 0) return onTimeout();

    const controller = new AbortController();
    animationInterval(1000, controller.signal, () => onTick(controller));
    return () => controller.abort();
  }, [duration]);

  return remainingTime;
};

export { useTimer };
export default useTimer;
