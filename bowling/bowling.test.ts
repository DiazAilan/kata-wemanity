import { Frame, Line } from "./bowling";

describe('Line', () => {

  test('Should add up Spare scoring correctly', () => {
    const line = new Line([
      new Frame([9,1]),
      new Frame([9,1])
    ])
    expect(line.getFrameScore(1)).toEqual(19)
  })

  test('Should add up Strike scoring correctly', () => {
    const line = new Line([
      new Frame([10]),
      new Frame([9,1])
    ])
    expect(line.getFrameScore(1)).toEqual(20)
  })

});

describe('Frame', () => {

  test('No tries', () => {
    try {
      const frame = new Frame([]);
    } catch (error) {
      expect((error as Error).message).toBe('Frame should include 1 or 2 tries');
    }
  })

  test('Should add up totalPinesDown correctly', () => {
    const frame = new Frame([9,1])
    expect(frame.totalPinesDown).toEqual(10)
  })

  test('Should detect Spare accordingly', () => {
    const frame = new Frame([9,1])
    expect(frame.isSpare).toBe(true)
    expect(frame.isStrike).toBe(false)
  })

  test('Should detect Strike accordingly', () => {
    const frame = new Frame([10])
    expect(frame.isSpare).toBe(false)
    expect(frame.isStrike).toBe(true)
  })

});