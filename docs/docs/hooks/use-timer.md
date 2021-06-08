# useTimer

Setup a timer and get the remaining time.

How it works:

- It will return the remaining time
- It will re-render component on timer tick
- It optimized from unnecessary re-render, so re-render / time-ticking will only happen if user open the browser and tab is activated
- It will cancel previous `onTimeout` callback if you change the duration

## Usage example

```jsx
function App() {
  const onTimeout = () => alert('timeout');
  const remainingTime = useTimer(10000, onTimeout);
  return <h3>Remaining Time: {remainingTime}</h3>;
}
```

## Reference

```tsx
type UseTimerType = (args: {
  duration: number;
  onTimeout?: () => void;
}) => number;
```

| Name      | Type                | Default | Description                                |
| --------- | ------------------- | ------- | ------------------------------------------ |
| duration  | number              |         | Timer duration in milliseconds             |
| onTimeout | function (optional) |         | Callback that will be triggered on timeout |
