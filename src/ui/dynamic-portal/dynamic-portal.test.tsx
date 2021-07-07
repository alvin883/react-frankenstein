import React from 'react';
import { render } from '@testing-library/react';
import { DynamicPortal } from './dynamic-portal';

it('should work', () => {
  render(<DynamicPortal id='test' />);
  expect(2 + 2).toBe(4);
});
