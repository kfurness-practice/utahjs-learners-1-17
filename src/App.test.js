import React from 'react'
import App, { Body } from './App'
import renderer from 'react-test-renderer'

test('Search snapshot test', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('Body snapshot test', () => {
  const component = renderer.create(<Body />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
