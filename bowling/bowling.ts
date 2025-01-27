export class Frame {

  tries: number[];

  constructor(tries: number[]) {
    if (!tries || !tries.length || tries.length > 4) {
      throw new Error('Frame should include 1 to 3 tries')
    }
    this.tries = tries
  }
  
  get isSpare(): boolean {
    return this.tries.length > 1 && (this.tries[0] + this.tries[1] === 10);
  }

  get isStrike(): boolean {
    return this.tries[0] === 10;
  }

  get totalPinesDown(): number {
    return this.tries.reduce((accumulator, current) => accumulator + current, 0)
  }
}

export class Line {
  frames: Frame[];

  constructor(frames: Frame[]) {
    this.frames = frames
  }

  get lastFrame(): Frame {
    return this.frames[9];
  }

  get bonusBalls(): number {
    if (this.lastFrame.isSpare || this.lastFrame.isStrike) {
      return this.lastFrame.isSpare ? 1 : 2
    }
    return 0
  }

  getFrameScore(target: number): number {
    const targetFrame = this.frames[target - 1]
    const nextFrame = this.frames[target]

    if (nextFrame) {
      if (targetFrame.isSpare) {
        return nextFrame.tries[0] + 10
      }
      if (targetFrame.isStrike) {
        return nextFrame.tries.length > 1
          ? nextFrame.tries[0] + nextFrame.tries[1] + 10
          : nextFrame.totalPinesDown + this.frames[target + 1].tries[0] + 10
      }
    }
    
    return targetFrame.totalPinesDown
  }

  get score(): number {
    return this.frames.reduce((accumulator, _, index) => 
      accumulator + this.getFrameScore(index + 1), 0
    )
  }
}