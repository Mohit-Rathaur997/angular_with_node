import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
// @Input() item =''
@Output() newItemEvent = new EventEmitter<string>();
  constructor() { }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  ngOnInit(): void {
  }

}
