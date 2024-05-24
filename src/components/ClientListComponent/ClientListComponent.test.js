import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ClientListComponent } from './ClientListComponent';

describe('ClientListComponent test', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should render component', () => {
    act(() => {
      ReactDOM.render(
        <ClientListComponent name="ClientListComponent" />,
        container
      );
    });

    const message = container.querySelector('.component');
    expect(message.textContent).toBe('Hello from ClientListComponent!');
  });
});
