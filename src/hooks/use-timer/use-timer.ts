import { useEffect, useState } from 'react';
import animationInterval from '../../utils/animation-interval';

type UseTimerType = (args: {
  /**
   * Unix timestamp (in seconds)
   */
  deadline: number;
  onTimeout?: () => void;
}) => number;

const useTimer: UseTimerType = ({ deadline, onTimeout = () => {} }) => {
  const [deadlineInMs] = useState(deadline * 1000);
  const getNewTime = () => Math.max(deadlineInMs - new Date().getTime(), 0);
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

  useEffect(() => {
    // Check if it already reach the deadline before setting interval
    if (getNewTime() <= 0) return onTimeout();

    const controller = new AbortController();
    animationInterval(1000, controller.signal, () => onTick(controller));
    return () => controller.abort();
  }, [deadline]);

  return remainingTime;
};

export default useTimer;
