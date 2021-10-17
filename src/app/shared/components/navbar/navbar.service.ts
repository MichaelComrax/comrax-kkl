import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepModel } from '../step/step.model';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private title$: BehaviorSubject<string>;
  private status$: BehaviorSubject<StepModel[]>;

  constructor() {
  }

  public setTitle(title: string) {
    this.title$ = new BehaviorSubject<string>(title);
  }
  
  public getTitle(): Observable<string> {
    return this.title$.asObservable();
  }
  
  public emitTitle(value: string) {
    return this.title$.next(value);
  }
  
  public setStatus(status : StepModel[]) {
    this.status$ = new BehaviorSubject<StepModel[]>(status);
  }

  public getStatus(): Observable<StepModel[]> {
    return this.status$.asObservable();
  }

  public emitStatus(value: StepModel[]) {
    return this.status$.next(value);
  }

  public toggleStatus(show : boolean, status : StepModel[]) :void {
    show ? this.emitStatus(status) : this.emitStatus([])
  }
}
