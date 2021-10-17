import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateNewContractService {

  constructor() { }

  private displayDrawer = new BehaviorSubject<boolean>(false);

  public updateDisplayDrawer(arg: boolean): void {
    this.displayDrawer.next(arg);
  }
  public getDisplayDrawer(): Observable<boolean> {
    return this.displayDrawer.asObservable();
  }
}
