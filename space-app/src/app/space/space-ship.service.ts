import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { OrderFormValue } from './order-form-value';
import { BomberShip, FighterShip, SpaceShip } from './space-ship';
import { SpaceShipType } from './space-ship-type';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {
  static shipProductionTime = 500;
  public hangarShips = new BehaviorSubject<SpaceShip[]>([]);
  constructor() { }

  produceShips(formValue: OrderFormValue): Observable<SpaceShip> {
    console.log(typeof formValue.shipType);
    const shipClass = formValue.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;
    return interval(SpaceShipService.shipProductionTime).pipe(
      map(() => new shipClass()),
      take(formValue.shipCount),
      tap((shipClass) => this.hangarShips.next([...this.hangarShips.getValue(), shipClass]))
    );
  }
}
