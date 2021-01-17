const { helloWorld } = require('../exercism');

describe('Hello World', () => {
  test("Returns 'Hello, World!'", () => {
    expect(helloWorld()).toBe('Hello, World!');
  });
});

