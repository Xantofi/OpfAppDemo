import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import ClientListPage from './ClientListPage';
import { logger } from '@absis/core';

jest.mock('@absis/core', () => {
  return {
    logger: {
      debug: jest.fn(),
    },
  };
});

describe('ClientListPage test', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should render page', () => {
    act(() => {
      ReactDOM.render(<ClientListPage />, container);
    });

    const message = container.querySelector('.page');
    expect(message.textContent).toBe('Hello from ClientListPage!');
    expect(logger.debug).toHaveBeenCalled();
  });

  it('should change name when click in button', () => {
    act(() => {
      ReactDOM.render(<ClientListPage />, container);
    });

    let message = container.querySelector('.page');
    expect(message.textContent).toBe('Hello from ClientListPage!');
    const button = container.querySelector('ui-button');
    act(() => {
      button.dispatchEvent(
        new CustomEvent('absisButtonClick', {
          bubbles: true,
          detail: {},
        })
      );
    });

    message = container.querySelector('.page');
    expect(message.textContent).toBe('Hello from Other Page Name!');
  });
});
