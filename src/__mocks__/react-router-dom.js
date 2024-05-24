const reactRouterDom = require('react-router-dom');

const mockReactRouterDom = {
  ...reactRouterDom,
  useParams: jest.fn(() => ({
    componentName: 'ui-textarea',
  })),
};

module.exports = mockReactRouterDom;
