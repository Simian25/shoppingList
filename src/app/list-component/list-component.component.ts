import { Component, OnInit, Input, ViewChild} from '@angular/core';
import {EditComponentComponent} from '../edit-component/edit-component.component';

import { LIST } from '../itemlist';
import {  Item } from '../item-class';
@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {
  items: Item[];
  selectedItem: Item;
  newItem: Item;

  @ViewChild(EditComponentComponent) private EditComponentComponent: EditComponentComponent;
  constructor() {
    this.items = LIST;
  }

  setActive(item: Item) {
    this.selectedItem = item;
    console.log(item);
  }
  setList(listItem) {
    console.log('Data received');
    this.newItem = listItem;
    this.items.push(this.newItem);
  }
  ngOnInit() {
  }

}
