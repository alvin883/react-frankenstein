# How to extends component props

In every UI component there is a generic type called `Extend{ComponentName}Props` (e.g: `ExtendButtonProps`) this is what you use to extends its props.

For example if you use [Button](/docs/components/Button) and you want to extends the `variant` props, let say you are making a crazy button with `triangle` and `hexagon` shape and you want to extends its color options with `purple`.

## Using TypeScript

```tsx
// extended-button.tsx
import { ExtendButtonProps } from 'react-frankenstein';
import clsx from 'clsx';
import styles from './extended-button.module.scss';

const ExtendedButton: ExtendButtonProps<{
  color: 'purple'; // this will be 'primary' | 'secondary' | 'purple'
  variant: 'triangle' | 'hexagon'; // this will be 'contained' | 'outlined' | 'triangle' | 'hexagon'
}> = (props) => {
  return (
    <Button
      {...props}
      className={clsx(
        styles.button,
        styles[`variant--${props.variant}`],
        styles[`color--${props.color}`],
        props.className,
      )}
    />
  );
};
```

## Using JavaScript

:::note
You don't need to extends prop type definition if you don't want to.
:::

```jsx
// extended-button.jsx
import { ExtendButtonProps } from 'react-frankenstein';
import clsx from 'clsx';
import styles from './extended-button.module.scss';

const ExtendedButton = (props) => {
  return (
    <Button
      {...props}
      className={clsx(
        styles.button,
        styles[`variant--${props.variant}`],
        styles[`color--${props.color}`],
        props.className,
      )}
    />
  );
};
```

```tsx
// extended-button.d.ts
import * as React from 'react';
import { ExtendButtonProps } from 'react-frankenstein';

declare const Button: ExtendButtonProps<{
  color: 'purple'; // this will be 'primary' | 'secondary' | 'purple'
  variant: 'triangle' | 'hexagon'; // this will be 'contained' | 'outlined' | 'triangle' | 'hexagon'
}>;

export default Button;
```

## The styles

<!-- prettier-ignore -->
```scss
// extended-button.module.scss
.button { ... }
.variant--triangle { ... }
.variant--hexagon { ... }
.color--purple { ... }
```
