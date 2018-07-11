// __tests__/App-test.js
import React from 'react'
import App from '../App'
import { Platform } from 'react-native'

import renderer from 'react-test-renderer'

describe('APP', () => {

  test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  });

})