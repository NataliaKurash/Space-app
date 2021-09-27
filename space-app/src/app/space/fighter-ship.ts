import { Pilot } from "./pilot";
import { SpaceShip } from "./space-ship";

export class FighterShip extends SpaceShip {
    constructor(pilot?: Pilot) {
        super('Viper', '/assets/img/480x800-Spaceship-PNG-Clipart.png', pilot);
      }
}
