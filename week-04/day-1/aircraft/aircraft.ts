'use strict';

export abstract class Aircraft {
  private _ammo: number;
  private _maxAmmo: number;
  private _baseDamage: number;
  private _type: string;

  constructor(maxAmmo: number, baseDamage: number, type: string) {
    this._ammo = 0;
    this._maxAmmo = maxAmmo;
    this._baseDamage = baseDamage;
    this._type = type;
  }

  public fight(): number {
    let damageDealt: number = this._ammo * this._baseDamage;
    this._ammo = 0;
    return damageDealt;
  }

  public refill(amount: number): number {
    let used: number = this._maxAmmo - this._ammo;
    this._ammo += used;
    return amount - used;
  }

  public getType(): string {
    return this._type;
  }

  public getStatus(): void {
    console.log(`Type: ${this._type}, Ammo: ${this._ammo}, Base damage: ${this._baseDamage}, All Damage: ${this._ammo * this._baseDamage}.`);
  }

  public isPriority(): boolean {
    if (this._type = 'F35') {
      return true;
    } else {
      return false;
    }

  }
}