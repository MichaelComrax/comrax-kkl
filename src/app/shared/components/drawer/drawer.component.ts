import { Component, OnInit } from '@angular/core';
import { DRAWER_ITEMS } from 'src/app/mock_data/create-new-contract';
import { StepModel } from '../step/step.model';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  public isOpen: boolean;
  public items:any[] = DRAWER_ITEMS;
  public step: StepModel = new StepModel({
    label: 'פרטי ההתקשרות',
    svgUrl: 'group',
    size: 3,
    variant: 'circle',
    type: 'wizard',
  })
  constructor() { }

  ngOnInit(): void {
  }
  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }

}
