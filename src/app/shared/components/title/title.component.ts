import { Component, Input, OnInit } from '@angular/core';
import { Classes } from '../../directives/classes.directive';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() text: string;
  @Input() title: boolean;
  @Input() classes: Classes
  @Input() slots: {};

  constructor() { }

  ngOnInit(): void {
    this.title = this.title || false;

    this.classes = this.classes || {
      fontSize : 1.4,
      fontWeight: 600,
    }
  }
}
