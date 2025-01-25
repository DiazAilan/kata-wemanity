class Try {
  pinesDown: number;
}

class Frame {

  tries: Try[];

  constructor(tries: Try[]) {
    this.tries = tries
  }
  
  get isSpare(): boolean {
    return this.totalPinesDown === 10;
  }

  get isStrike(): boolean {
    // TODO - Evaluate in Line's context
    return this.tries[0].pinesDown === 10;
  }

  get totalPinesDown(): number {
    return this.tries.reduce((accumulator, current) => accumulator + current.pinesDown, 0)
  }

  get score(): number {
    // TODO - Swap spare addition logic to next Frame when working with Line's class score evaluation method
    return this.isSpare ? 10 + this.totalPinesDown : this.totalPinesDown
  }
}

class Line {
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

  addBonusBalls(): void {
    // TODO - add a meaningful way to add bonus tries to Line's structure
  }

  get score(): number {
    // TODO - handle score addition taking into account every Frame + Bonus Balls scores
  }
}