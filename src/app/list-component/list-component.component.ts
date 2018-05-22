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
  error: String;
  @ViewChild(EditComponentComponent) private EditComponentComponent: EditComponentComponent;
  
  setActive(item: Item) {
    this.selectedItem = item;
  }

  addList(item) {
    if (this.items.some(e => e.name === item.name)) {
      this.error = 'duplicate';
    } else {
      console.log(item);
      this.newItem = item;
      this.items.push(this.newItem);
      this.error = '';
      localStorage.setItem('itemList', JSON.stringify(this.items));
    }
  }

  delItem(item) {
    const index = this.items.indexOf(item);
    console.log(index);
    if (index > -1) {
    this.items.splice(index, 1);
    localStorage.setItem('itemList', JSON.stringify(this.items));
        }
  }

  resetList() {
    localStorage.removeItem('itemList');
    this.items = LIST;
  }

  constructor() {
    if (localStorage.getItem('itemList') === null) {
      this.items = LIST;
      localStorage.setItem('itemList', JSON.stringify(this.items));
      console.log(JSON.stringify(this.items));
    } else {
      this.items = JSON.parse(localStorage.getItem('itemList'));
    }
  }

  ngOnInit() {
  }

}
