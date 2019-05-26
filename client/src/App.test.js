import { validate } from "@babel/types";
import { handleInputChange } from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let result;

test('Practise test', () => {
  result = 5 * 5;
  expect(result).toBe(25);
  result = true;
  expect(result).toBe(true);
});


// THIS IS THE BASIC UNIT TEST THAT WE WILL USE TO SEE IF THE COMPONENT RENDERS.

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

process.exit