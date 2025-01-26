import { Frame, Line } from "./bowling";

describe('Line', () => {

  test('Should sum up Spare scoring correctly', () => {
    const line = new Line([
      new Frame([9,1]),
      new Frame([9,1])
    ])
    expect(line.getFrameScore(1)).toEqual(19)
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