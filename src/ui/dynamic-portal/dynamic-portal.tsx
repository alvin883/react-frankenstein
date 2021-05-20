import React, { memo, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export type DynamicPortalProps = {
  id: string;
};

const DynamicPortal: React.FC<DynamicPortalProps> = ({ id, children }) => {
  const initEl = document.getElementById(id) || document.createElement('div');
  const el = useRef(initEl);
  const [isCreatedDynamically] = useState(!el.current.parentElement);

  useEffect(() => {
    if (isCreatedDynamically) {
      el.current.id = id;
      document.body.appendChild(el.current);
    }
    return () => {
      if (isCreatedDynamically && el.current.parentElement) {
        el.current.parentElement.removeChild(el.current);
      }
    };
  }, [id]);

  return createPortal(children, el.current);
};

DynamicPortal.propTypes = {
  id: PropTypes.string.isRequired
};

export default memo(DynamicPortal);
