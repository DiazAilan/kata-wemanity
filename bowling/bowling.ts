export class Frame {

  rolls: number[];

  constructor(rolls: number[]) {
    if (!rolls || !rolls.length || rolls.length > 3) {
      throw new Error('Frame should include 1 to 3 rolls')
    }
    this.rolls = rolls
  }
  
  get isSpare(): boolean {
    return this.rolls.length > 1 && (this.rolls[0] + this.rolls[1] === 10);
  }

  get isStrike(): boolean {
    return this.rolls[0] === 10;
  }

  get totalPinesDown(): number {
    return this.rolls.reduce((accumulator, current) => accumulator + current, 0)
  }
}

export class Line {
  frames: Frame[];

  constructor(frames: Frame[]) {
    this.frames = frames
  }

  get score(): number {
    return this.frames.reduce((accumulator, _, index) => 
      accumulator + this.getFrameScore(index), 0
    )
  }

  private getFrameScore(frameIndex: number): number {
    const targetFrame = this.frames[frameIndex]
    const nextFrame = this.frames[frameIndex + 1]

    if (nextFrame) {
      if (targetFrame.isSpare) {
        return nextFrame.rolls[0] + 10
      }
      if (targetFrame.isStrike) {
        return nextFrame.rolls.length > 1
          ? nextFrame.rolls[0] + nextFrame.rolls[1] + 10
          : nextFrame.totalPinesDown + this.frames[frameIndex + 2].rolls[0] + 10
      }
    }
    
    return targetFrame.totalPinesDown
  }
}