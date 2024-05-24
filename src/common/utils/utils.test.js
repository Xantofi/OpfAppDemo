import { toUpperCase } from './utils';

describe('Utils test', () => {
  it('toUpperCase: when null, return null ', () => {
    const result = toUpperCase(null);
    expect(result).toBe(null);
  });

  it('toUpperCase: when test, return TEST ', () => {
    const result = toUpperCase('test');
    expect(result).toBe('TEST');
  });
});
