import getCurrentLocale from './intl-util';

jest.mock('./intl-date-time-format', () => {
  return jest.fn().mockImplementation(() => ({
    resolvedOptions: jest.fn().mockImplementation(() => {
      return { locale: 'en-GB' };
    }),
  }));
});

let originalNavigator: Navigator | undefined;

describe('getCurrentLocale', () => {
  beforeAll(() => {
    // Store the original global.navigator before tests modify
    originalNavigator = global.navigator;
  });

  afterEach(() => {
    // Reset global.navigator to its original value
    if (originalNavigator) {
      global.navigator = originalNavigator;
    }
  });

  it('should return the first language in navigator.languages array', () => {
    // Set the languages so that navigator is defined
    Object.defineProperty(global, 'navigator', {
      value: {
        languages: ['en-US', 'en'],
      },
      writable: true,
    });

    expect(getCurrentLocale()).toEqual('en-US');
  });

  it('should return the locale resolved by DateTimeFormat when navigator.languages is not available', () => {
    // Set navigator to undefined
    Object.defineProperty(global, 'navigator', {
      value: {
        undefined,
      },
      writable: true,
    });

    expect(getCurrentLocale()).toEqual('en-GB');
  });
});
