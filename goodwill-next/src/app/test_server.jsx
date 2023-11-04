import { printHello } from './server';

describe('printHello', () => {
  it('should log "Hello World!" to the console', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    await printHello();
    expect(consoleSpy).toHaveBeenCalledWith('Hello World!');
  });
});