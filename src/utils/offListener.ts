const offListener = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  eventName: keyof DocumentEventMap,
  handler: (e: Event) => void
) => {
  obj?.removeEventListener(eventName, handler);
};

export default offListener;
