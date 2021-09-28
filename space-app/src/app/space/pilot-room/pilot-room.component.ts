import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilot } from '../pilot';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  selectedPilot: Pilot | null = null;
  @Output() selected = new EventEmitter<Pilot | null>();
  constructor(public pilotService: PilotService) { }
  pilots: Pilot[] = [];
  ngOnInit(): void {
     this.pilotService.getPilots().subscribe({
      next: (pilots) => this.pilots = pilots,
    });;
    // this.pilots.push(new Pilot('Lary Rek', '/assets/img/lary.jpg'));
    // this.pilots.push(new Pilot('Lory Rek', '/assets/img/lory.jpg'));
  }

  public select(pilot: Pilot | null){
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  public pilotRemove(pilot: Pilot){
    const index = this.pilots.indexOf(pilot);
  this.pilots.splice(index, 1);
  this.select(null);
  }

  public pilotReturn(pilot: Pilot){
    this.pilots.push(pilot);
  }
}
