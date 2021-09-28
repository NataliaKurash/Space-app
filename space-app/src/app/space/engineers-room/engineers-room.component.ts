import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShipType } from '../ship-type';
import { SpaceShip } from '../space-ship';
import { SpaceShipType } from '../space-ship-type';
import { SpaceShipService } from '../space-ship.service';

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {
  form: FormGroup;
  spaceShipTypes: ShipType[] = [
    {name: 'Fighter', type: SpaceShipType.Fighter},
    {name: 'Bomber', type: SpaceShipType.Bomber}
  ];
  shipCount = this.spaceShipService.hangarShips.pipe(
   map((ships) => ships.length)
  );
  shoulProducing: boolean;
  constructor(public spaceShipService: SpaceShipService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      shipType: new FormControl(SpaceShipType, {validators: [Validators.required]}),
      shipCount: new FormControl('', {validators:[Validators.required, Validators.min(1), Validators.max(5)]}),
  })

}
public onSubmit(){
  this.shoulProducing = true;
  this.spaceShipService.produceShips(this.form.value)
  .subscribe({
    complete: () => this.shoulProducing = false
  });
}
}
