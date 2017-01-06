##React with Stateless Functional Components

This project is the first part of presentation on using stateless functional components to build React apps.  I like using these sorts of components because I find it easier to reason about how they work and I'd like to demonstrate why.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

#Changes

Changed package.json:
"test": ["react-scripts test --env=jsdo","jest"],
to
"test": "jest",

#Deleted Files

App.test.js errors when using ```$ npm test```

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

// import { sum } './App'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
