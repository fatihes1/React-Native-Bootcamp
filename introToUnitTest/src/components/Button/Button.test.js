import {render} from '@testing-library/react-native';
import React from 'react';
import Button from './Button';

test('should match with snapshot', () => {
  const comp = render(<Button />);
  expect(comp).toMatchSnapshot();
});
