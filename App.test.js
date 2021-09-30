import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import App, { Screen1, AppStack } from './App';

describe('Screen1', () => {
  it('navigates on button press', () => {
    const push = jest.fn();
    const { getByText } = render(<Screen1 navigation={{ push }} />);
    fireEvent.press(getByText('Go to Screen 2'));
    expect(push).toHaveBeenCalledWith('Screen2');
  });
});