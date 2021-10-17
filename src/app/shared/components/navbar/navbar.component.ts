import { IconModel } from '../icon/icon.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StepModel } from '../step/step.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() public status: StepModel[];
  @Input() public title: string;
  @Input() public openIcon: string;
  @Input() public logos: IconModel[];

  @Input() public title$: Observable<string>;
  @Input() public status$: Observable<StepModel>;

  public isOpen: boolean = false;
  public openLabel: string = 'תפריט';
  public closeLabel: string = 'סגור תפריט';

  @Output() menuToggle = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menuToggle.emit();
  }
}
