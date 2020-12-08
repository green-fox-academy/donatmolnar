'use strict';

import { Plant } from './plant';

export class Garden {
  private _plants: Plant[] = [];

  public addPlant(newPlant: Plant): void {
    this._plants.push(newPlant);
  }

  public waterAll(amountAtDisposal: number): void {
    let dryPlants: Plant[] = this._plants.filter(plant => plant.needsWatering() === true);
    let waterForEachPlant: number = amountAtDisposal / dryPlants.length;

    console.log(`Watering with ${amountAtDisposal}`);

    dryPlants.forEach((plant: Plant) => plant.water(waterForEachPlant));
    
  }

  public printAll(): void {
    this._plants.forEach((plant: Plant) => plant.printInfo());
    console.log('\n');
    
  }
}