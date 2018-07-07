// __tests__/App-test.js
import React from 'react'
import App from '../App'
import { Platform } from 'react-native'

import renderer from 'react-test-renderer'

describe('Addition', () => {

  test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  });

  test('renders correctly text IOS', () => {
    Platform.OS = 'ios'
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  });

  test('renders correctly text ANDROID', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  });

})