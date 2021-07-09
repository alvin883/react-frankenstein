# useTimer

Setup a timer and get the remaining time.

How it works:

- It will return the remaining time
- It will re-render component on timer tick
- It optimized from unnecessary re-render, so re-render / time-ticking will only happen if user open the browser and tab is activated
- It will cancel previous `onTimeout` callback if you change the duration

## Usage example

```jsx
import { useTimer } from 'react-frankentein';

const App = () => {
  const onTimeout = () => alert('timeout');
  const remainingTime = useTimer({
    duration: 1000,
    onTimeout,
  });
};
```

##### In action

```jsx live
function App() {
  const onTimeout = () => alert('timeout');
  const remainingTimeInMs = useTimer({
    duration: 10000,
    onTimeout,
  });
  const remainingTime = parseTimeObject(remainingTimeInMs);

  return (
    <h3>
      Remaining Time: {remainingTime.m}m:{remainingTime.s}s
    </h3>
  );
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
