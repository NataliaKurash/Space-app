import { Component, Input, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {
@Input() pilot!: Pilot;
pilots: Pilot[] = [];
  constructor() { }

  ngOnInit(): void {
  this.pilots.push(new Pilot('Lary Rek', '/assets/img/lary.jpg'));
  this.pilots.push(new Pilot('Lory Rek', '/assets/img/lory.jpg'));
  }

}
