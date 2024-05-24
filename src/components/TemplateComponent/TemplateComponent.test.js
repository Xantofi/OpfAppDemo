import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import TemplateComponent from './TemplateComponent';

describe('TemplateComponent test', () => {
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
        <TemplateComponent name="TemplateComponent" />,
        container
      );
    });

    const message = container.querySelector('.template-component');
    expect(message.textContent).toBe('Hello TemplateComponent!');
  });
});
