/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  Button,
  Modal,
  useTimer,
  useModal,
  parseTimeObject,
} from 'react-frankenstein';

const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: 'white',
      border: 'solid red',
      borderRadius: 20,
      padding: 10,
      cursor: 'pointer',
      ...props.style,
    }}
  />
);

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        position: 'relative',
        height: '200px',
        margin: '-1rem',
        padding: '1rem',
      }}
    >
      {children}
    </div>
  );
};

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ButtonExample,
  Button,
  Wrapper,
  Modal,
  useTimer,
  useModal,
  parseTimeObject,
};

export default ReactLiveScope;
