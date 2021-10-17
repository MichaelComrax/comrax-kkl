import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {
  @Input() item: any;
  @Input() index:number;
  @Output() deleteItem: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  public handleDelete(arg?: any): void {    
    arg ? this.deleteItem.emit([this.index,arg]) : this.deleteItem.emit([this.index]);
  }
}
