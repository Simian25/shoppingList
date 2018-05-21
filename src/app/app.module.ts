import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { ItemComponentComponent } from './item-component/item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    EditComponentComponent,
    ItemComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
