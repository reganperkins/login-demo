import React from 'react';
import ReactDOM from 'react-dom';
import LoginFrom from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginFrom />, div);
  ReactDOM.unmountComponentAtNode(div);
});
