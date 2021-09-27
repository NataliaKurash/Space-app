import { Pilot } from "./pilot";

export class SpaceShip {
    modelName: string;
    imageUrl: string;
    health = 100;
    activeShields = true;
    activeWeapons = true;
    pilot?: Pilot
constructor(modelName: string, imageUrl: string, pilot?: Pilot ) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
    this.pilot = pilot;
  }
}
export class FighterShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Viper', './assets/img/480x800-25278-5-spaceship-transparent-image.png', pilot);
  }
}

export class BomberShip extends SpaceShip{
  constructor(pilot?: Pilot){
    super('Raptor', './assets/img/480x800-Spaceship-PNG-Clipart.png', pilot);
  }
}
