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

  describe('Suggested case 1', () => {
    test('12 strikes: Should score 300 points', () => {
      const line = new Line([
        new Frame([10]),
        new Frame([10]),
        new Frame([10]),
        new Frame([10]),
        new Frame([10]),
        new Frame([10]),
        new Frame([10]),
        new Frame([10]),
        new Frame([10]),
        new Frame([10, 10, 10]),
      ])
      expect(line.getFrameScore(9)).toBe(30)
      expect(line.getFrameScore(10)).toBe(30)
      expect(line.score).toBe(300)
    })
  })

  describe('Suggested case 2', () => {
    test('10 pairs of 9 and miss: Should score 90 points', () => {
      const line = new Line([
        new Frame([9,0]),
        new Frame([9,0]),
        new Frame([9,0]),
        new Frame([9,0]),
        new Frame([9,0]),
        new Frame([9,0]),
        new Frame([9,0]),
        new Frame([9,0]),
        new Frame([9,0]),
        new Frame([9,0]),
      ])
      expect(line.score).toBe(90)
    })
  })

  describe('Suggested case 3', () => {
    test('10 pairs of 5 and spare, with a final 5: Should score 150 points', () => {
      const line = new Line([
        new Frame([5,5]),
        new Frame([5,5]),
        new Frame([5,5]),
        new Frame([5,5]),
        new Frame([5,5]),
        new Frame([5,5]),
        new Frame([5,5]),
        new Frame([5,5]),
        new Frame([5,5]),
        new Frame([5,5,5])
      ])
      expect(line.score).toBe(150)
    })
  })

});

describe('Frame', () => {

  test('No tries', () => {
    try {
      const frame = new Frame([]);
    } catch (error) {
      expect((error as Error).message).toBe('Frame should include 1 to 3 tries');
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