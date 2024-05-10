export default class Measurements {
  readonly frameDiff = {
    base: 0.25,
    heigth: 0.5,
  };

  readonly panelDiff = {
    jambas: 0.75,
    alfaisal: 0.125,
  };

  readonly glassDiff = {
    base: 1.25,
    heigth: 3.875,
  };

  readonly base: number;
  readonly heigth: number;
  readonly panels: number;

  constructor(base: number, heigth: number, panels: number) {
    this.base = base;
    this.heigth = heigth;
    this.panels = panels;
  }

  getRails() {
    return this.base - this.frameDiff.base;
  }

  getLaterals() {
    return this.heigth - this.frameDiff.heigth;
  }

  getAlfaisal() {
    return (this.base - this.panelDiff.alfaisal * this.panels) / this.panels;
  }

  getJambas() {
    return this.heigth - this.panelDiff.jambas;
  }

  getGlassBase() {
    return (
      (this.getRails() -
        this.glassDiff.base -
        this.glassDiff.base * this.panels) /
      this.panels
    );
  }

  getGlassHeigth() {
    return this.heigth - this.glassDiff.heigth;
  }
}
