import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pilot } from './pilot';
import { PilotAttrs } from './pilot-attrs';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  public env = environment;

  constructor(public httpClient: HttpClient) { }

  public getPilots(): Observable<Pilot[]>{
    return this.httpClient.get<PilotAttrs[]>(`${this.env.apiUrl}/pilots`).pipe(map((data)=> data.map((pilotAttrs) => new Pilot(pilotAttrs))));
  }
}
