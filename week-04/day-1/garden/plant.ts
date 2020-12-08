'use strict';

export class Plant {
  protected _waterLevel: number;
  protected _absorptionRate: number;
  protected _criticalWaterLevel: number;
  protected _plantType: string;
  protected _color: string;

  constructor(absorptionRate: number, criticalWaterLevel: number, color: string, plantType: string) {
    this._absorptionRate = absorptionRate;
    this._criticalWaterLevel = criticalWaterLevel;
    this._plantType = plantType;
    this._color = color;
    this._waterLevel = 0;
  }

  public needsWatering(): boolean {
    return this._waterLevel < this._criticalWaterLevel;
  }

  public water(amount: number): void {
    this._waterLevel += amount * this._absorptionRate;
  }

  public printInfo(): void {
    console.log(`The ${this._color} ${this._plantType} ${this.needsWatering() === true ? 'needs' : 'doesn\'t need'} water.`);
  }
}
