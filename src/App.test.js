import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';
import { router } from '@absis/core';

describe('Basic App test', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('Renders without crashing', () => {
    unmountComponentAtNode(container);
  });

  it('Has header tag', () => {
    act(() => {
      render(<App />, container);
    });
    const ele = container.querySelector('section');
    expect(ele).not.toBe(null);
  });

  it('When click in bytton, it has a navigation to Template Page', () => {
    act(() => {
      render(<App />, container);
    });
    const button = container.querySelector('ui-button[fill="link"]');
    act(() => {
      button.dispatchEvent(
        new CustomEvent('absisButtonClick', {
          bubbles: true,
          detail: {},
        })
      );
    });
    expect(router.navigateTo).toHaveBeenCalledWith(
      '/template-page',
      { type: 'Internal' },
      expect.anything()
    );
  });
});
