# Modal

:::info
Modal doesn't have a state management on its own, you should also use `useModal` for that, the idea is to separate the concern so the behaviour can be easily customize
:::

## Props

| Name            | Type                   | Default | Description                                                                                                                                                                                |
| --------------- | ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| as              | elementType            | `'div'` | An element type to render as (string or function).                                                                                                                                         |
| children        | ReactNode              |         |                                                                                                                                                                                            |
| removeDefault   | boolean                | `false` | Remove default className from the component?                                                                                                                                               |
| className       | string                 |         | Additional classes.                                                                                                                                                                        |
| unmountOnExit   | boolean                | `true`  |
| timeout         | number                 |         | Timeout transition for on unmount / on element mount                                                                                                                                       |
| initialFocusRef | React.MutableRefObject |         | Element that should be auto-focused on modal open                                                                                                                                          |
| isOpen          | boolean                | false   |
| close           | Function               |
| open            | Function               |
| attributes      | object                 |         | additional html attribute related to modal behaviour (ex. a11y attribute), although you can pass the attribute name directly without this passing to this prop, it's just to make it clear |

## Basic example

```jsx
import { Modal, useModal } from 'react-frankenstein';
const App = () => {
    const modalState = useModal()
    return <>
    <Button>
    </>
}
```

### Live example

```jsx live
function App() {
  const modalState = useModal();
  return (
    <Wrapper>
      <Button text='Open modal' onClick={modalState.open} />
      <Modal {...modalState} close={() => {}} classNames={{}}>
        <Modal.Overlay />
        <Modal.Box style={{ color: '#000' }}>
          Basic
          <Button text='Close modal' onClick={modalState.close} />
        </Modal.Box>
      </Modal>
    </Wrapper>
  );
}
```

## Transition
