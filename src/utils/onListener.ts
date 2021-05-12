const onListener = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  eventName: keyof DocumentEventMap,
  handler: (e: Event) => void
) => {
  obj?.addEventListener(eventName, handler);
};

export default onListener;
