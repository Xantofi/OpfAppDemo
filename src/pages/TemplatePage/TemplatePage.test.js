import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import TemplatePage from './TemplatePage';
import { logger } from '@absis/core';

jest.mock('@absis/core', () => {
  return {
    logger: {
      debug: jest.fn(),
    },
  };
});

describe('TemplatePage test', () => {
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
      ReactDOM.render(<TemplatePage />, container);
    });

    const message = container.querySelector('.template-page');
    expect(message.textContent).toBe('Hello TemplatePage!');
    expect(logger.debug).toHaveBeenCalled();
  });

  it('should change name when click in button', () => {
    act(() => {
      ReactDOM.render(<TemplatePage />, container);
    });

    let message = container.querySelector('.template-page');
    expect(message.textContent).toBe('Hello TemplatePage!');
    const button = container.querySelector('ui-button');
    act(() => {
      button.dispatchEvent(
        new CustomEvent('absisButtonClick', {
          bubbles: true,
          detail: {},
        })
      );
    });

    message = container.querySelector('.template-page');
    expect(message.textContent).toBe('Hello Other Name!');
  });
});
