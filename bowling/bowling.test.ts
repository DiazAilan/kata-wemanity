import { Frame } from "./bowling";

describe('Line', () => {
  test('', () => {
    expect(console.log('DEBUGGER')).toBeFalsy();
  })
});

describe('Frame', () => {

  test('No tries', () => {
    try {
      const frame = new Frame([]);
    } catch (error) {
      expect((error as Error).message).toBe('Frame should include exactly 2 tries');      
    }
  })
  
});