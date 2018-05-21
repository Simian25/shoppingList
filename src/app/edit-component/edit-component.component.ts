import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Item } from '../item-class';
@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {
  @Input() edit: Item;
  @Output() event: EventEmitter<Item> = new EventEmitter;


  addToList(name: HTMLInputElement, amount: HTMLInputElement) {
    this.event.emit({name: name.value, amount:  parseInt(amount.value) });
  }
  constructor() { }

  ngOnInit() {
  }

}
