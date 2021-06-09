# Controlled vs Uncontrolled Props

in the UI component code you will see there's `controlled` and `uncontrolled` props. This is irrelevant for user, but relevant if you want to contribute to the project.

For each UI component, it receive some props. For example, in `<Button/>` there's `text` props for user to set button text and this props is defined in the code and [documented here](/docs/components/button) and it's not derived from HTML element props, this is what a controlled props mean.

However `<Button/>` also receives `onFocus` props, this is not defined in the code nor in the documentation, it's inherited from the `button` tag itself (since `<Button/>` have default tag `button`), and `HTMLButton` has this property, and this is called uncontrolled props. For example, if you change the HTML tag to an `a`, like this `<Button as="a" />` it will have uncontrolled props called `href`, and it's derived from the default HTMLAnchor.
