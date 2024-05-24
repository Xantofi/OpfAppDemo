const coreService = require('@absis/core');

const mockCoreService = {
  ...coreService,
  http: {
    call: jest
      .fn()
      .mockReturnValueOnce(
        Promise.resolve({
          status: 200,
          data: [
            {
              numero: 'ES27 2100 0001 0872 0009 4600',
              type: 'Cuenta para PLP',
              subtype: 'Libra Esterlina',
              saldo: '-681.85',
              opciones: 'Opciones',
            },
            {
              numero: 'ES50 2100 0001 5865 0149 5840',
              type: 'Cuenta pagos',
              subtype: '',
              saldo: '1854.75',
              opciones: 'Opciones',
            },
          ],
        })
      )
      .mockReturnValueOnce(
        Promise.reject({ error: 'some error', status: 400 })
      ),
  },
  i18n: {
    t: jest
      .fn()
      .mockReturnValueOnce(Promise.resolve({ data: 'mock' }))
      .mockReturnValueOnce(Promise.reject({ error: 'some error' })),
    f: jest.fn().mockReturnValueOnce(Promise.resolve({ data: 'mock' })),
  },
  logger: {
    log: jest.fn(),
    debug: jest.fn().mockReturnValueOnce(Promise.resolve({ e: 'mock' })),
    error: jest.fn(),
    fatal: jest.fn(),
    info: jest.fn(),
    metric: jest.fn(),
    warning: jest.fn(),
  },
  router: {
    navigationManager: jest.fn().mockImplementation(() => {
      return {};
    }),
    navigateTo: jest.fn(),
    renderResolutorUrl: jest.fn(),
  },
  context: {
    get: jest.fn().mockReturnValueOnce(
      Promise.resolve({
        channelContext: {
          test: 'test',
        },
        userContext: {
          test2: 'test2',
        },
      })
    ),
  },
  platformUtilities: {
    getPlatform: jest.fn(),
    isMobile: jest.fn(),
    closeWindow: jest.fn(),
    deeplink: jest.fn(),
    openAssistant: jest.fn(),
  },
  analytics: {
    trackView: jest.fn(),
    trackEvent: jest.fn(),
  },
};

module.exports = mockCoreService;
