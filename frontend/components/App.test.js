// Write your tests here
import React from "react"
import { render, screen, waitFor } from '@testing-library/react';

import AppClass from "./AppClass";
import AppFunctional from "./AppFunctional"

test('sanity', () => {
  expect(true).toBe(true)
})
test('render AppClass without errors', () => {
  render(<AppClass/>);
});

test('render AppFunctional without errors', () => {
  render(<AppFunctional/>);
});
