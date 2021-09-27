import { Component, OnInit, ViewChild } from '@angular/core';
import { BomberShip } from '../bomber-ship';
import { FighterShip } from '../fighter-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import { SpaceShip } from '../space-ship';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] = [];
  selectedPilot: Pilot | null = null;
  @ViewChild(PilotRoomComponent) pilotRooms!: PilotRoomComponent ;
  constructor() { }

  ngOnInit(): void {
    this.spaceShips.push(new FighterShip(new Pilot('Lee Adam', './assets/img/images.png')));
    this.spaceShips.push(new BomberShip());
  }

  public setSelectedPilot(pilot: Pilot | null){
    this.selectedPilot = pilot;
  }

  public setPilot(spaceShip: SpaceShip){
    if (!this.selectedPilot) { return; }
    spaceShip.pilot = this.selectedPilot;
    this.pilotRooms.pilotRemove(this.selectedPilot);
  }

  public deletePilot(spaceShip: SpaceShip){
    if (!spaceShip.pilot) { return; }
    this.pilotRooms.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = undefined;
  }
}
