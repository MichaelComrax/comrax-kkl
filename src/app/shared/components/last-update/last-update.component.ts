import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-update',
  templateUrl: './last-update.component.html',
  styleUrls: ['./last-update.component.scss']
})
export class LastUpdateComponent implements OnInit {

  @Input() text: string
  @Input() date: Date

  constructor() { }

  ngOnInit(): void {
  }

}
