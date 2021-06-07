---
sidebar_position: 1
---

# Button

test a

| Name          | Default     | Type                                  | Description                                                                                                          |
| ------------- | ----------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| as            | `'button'`  | elementType                           | An element type to render as (string or function).                                                                   |
| children      |             | ReactNode                             | If you pass children to a Button, it will override nor ignore some of the props, such as `text, iconStart, iconEnd`. |
| removeDefault | `false`     | boolean                               | Remove default className from the component?                                                                         |
| className     |             | string                                | Additional classes.                                                                                                  |
| classNames    |             | [ButtonClassNames](#buttonclassnames) | Add classes into internal component                                                                                  |
| color         | `'primary'` | [ButtonColorEnum](#buttoncolorenum)   |
| disabled      | `false`     | boolean                               |
| iconStart     |             | elementType                           |
| iconEnd       |             | elementType                           |
| isLoading     |             | boolean                               |
| size          | `'normal'`  | [ButtonSizeEnum](#buttonsizeenum)     |
| text          | `'normal'`  | [ButtonSizeEnum](#buttonsizeenum)     |

```jsx live
function MyPlayground(props) {
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
