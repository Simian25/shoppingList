import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Item } from '../item-class';
@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {
  @Input() item: Item;
  selectedItem: Item;
  done: boolean;

  @Output() event: EventEmitter<Item> = new EventEmitter;

  delItem() {
    this.event.emit(this.item);
    console.log(this.item);
  }
  strikeItem() {
    this.done = !this.done;
  }
  constructor() {
  }
  ngOnInit() {
  }

}
