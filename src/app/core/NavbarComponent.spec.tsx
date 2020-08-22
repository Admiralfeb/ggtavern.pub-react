import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Navbar from './NavbarComponent';
import { MemoryRouter } from 'react-router-dom';

let container: HTMLDivElement = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders', () => {
  act(() => {
    render(
      <>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </>,
      container
    );
  });
  expect(container).toBeDefined();
});
