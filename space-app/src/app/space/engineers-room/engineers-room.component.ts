import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShipType } from '../ship-type';
import { SpaceShipType } from '../space-ship-type';

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {
  form: FormGroup;
 spaceShipTypes: ShipType[] = [
    {name: 'Myśliwiec', type: SpaceShipType.Fighter},
    {name: 'Bombowiec', type: SpaceShipType.Bomber}
  ];
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      shipType: new FormControl(SpaceShipType, {validators: [Validators.required]}),
      shipCount: new FormControl('', {validators:[Validators.required, Validators.min(1), Validators.max(5)]}),
  })

}
public onSubmit(){
  console.log(this.form.value);
}
}
