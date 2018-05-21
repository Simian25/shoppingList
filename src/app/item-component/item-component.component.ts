import { Component, OnInit, Input } from '@angular/core';
import {  Item } from '../item-class';
@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {
  @Input() item: Item;
  selectedItem: Item;
  constructor() {
  }
  ngOnInit() {
  }

}
