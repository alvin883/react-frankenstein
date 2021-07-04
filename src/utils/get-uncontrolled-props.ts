const getUncontrolledProps = (props: object, controlledProps: string[]) => {
  let otherProps = {};
  Object.keys(props).forEach((key) => {
    const isControlledProp = controlledProps.indexOf(key) > -1;
    if (!isControlledProp) otherProps[key] = props[key];
  });
  return otherProps;
};

export default getUncontrolledProps;
