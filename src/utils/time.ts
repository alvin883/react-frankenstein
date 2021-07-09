/**
 * Parse UNIX time into time object (hours, minutes, seconds)
 * @param time time in milliseconds
 */
export const parseTimeObject = (time: number) => {
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  return {
    h: hours.toString().padStart(2, '0'),
    m: minutes.toString().padStart(2, '0'),
    s: seconds.toString().padStart(2, '0'),
  };
};
