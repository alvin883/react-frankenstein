---
sidebar_position: 1
---

# Button

you know, a button

| Name          | Type                                  | Default     | Description                                                                                                          |
| ------------- | ------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| as            | elementType                           | `'button'`  | An element type to render as (string or function).                                                                   |
| children      | ReactNode                             |             | If you pass children to a Button, it will override nor ignore some of the props, such as `text, iconStart, iconEnd`. |
| removeDefault | boolean                               | `false`     | Remove default className from the component?                                                                         |
| className     | string                                |             | Additional classes.                                                                                                  |
| classNames    | [ButtonClassNames](#buttonclassnames) |             | Add classes into internal component                                                                                  |
| color         | [ButtonColorEnum](#buttoncolorenum)   | `'primary'` |
| disabled      | boolean                               | `false`     |
| iconStart     | elementType                           |             |
| iconEnd       | elementType                           |             |
| isLoading     | boolean                               |             |
| size          | [ButtonSizeEnum](#buttonsizeenum)     | `'normal'`  |
| text          | string                                |             |

## Usage example

```jsx live
function App(props) {
  return (
    <div>
      <Button text='Basic' />
    </div>
  );
}
```

## `ButtonClassNames`

| Key                 | Type   |
| ------------------- | ------ |
| button              | string |
| button\_\_icon      | string |
| button\_\_iconStart | string |
| button\_\_iconEnd   | string |
| button\_\_text      | string |
| button\_\_loading   | string |

## `ButtonColorEnum`

| option        |
| ------------- |
| `'primary'`   |
| `'secondary'` |

## `ButtonSizeEnum`

| option     |
| ---------- |
| `'small'`  |
| `'normal'` |
| `'jumbo'`  |

### TODO: How to extends ButtonSizeEnum?
