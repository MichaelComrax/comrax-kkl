import { BehaviorSubject, Observable } from 'rxjs';
import { Classes } from 'src/app/shared/directives/classes.directive';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypographyService {

  private classes$: BehaviorSubject<Classes>;


  constructor() { }

  public getClasses(): Observable<Classes> {
    return this.classes$.asObservable()
  }

  public updateClasses(classes: Classes) {
    this.classes$.next(classes)
  }

  public setClasses(classes: Classes) {
    this.classes$ = new BehaviorSubject<Classes>(classes)
  }
}
