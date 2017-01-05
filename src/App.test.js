import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TestLink } from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <TestLink page="http://www.facebook.com">Facebook</TestLink>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  //manually trigger the callback
  tree.props.onMouseEnter()
  //re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  //manually trigger the callback
  tree.props.onMouseLeave()
  //re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
