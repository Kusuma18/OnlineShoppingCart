import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {BackGroundColorDirective} from './background-grey.directive';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import {MatTableModule} from '@angular/material/table';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { GetItemComponent } from './get-item/get-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import {SearchCardPipe} from './searchCard.pipe';

@NgModule({
  declarations: [
    AppComponent,   
    AddItemComponent,
    EditItemComponent,
    GetItemComponent,
    DeleteItemComponent,

    BackGroundColorDirective,
    SearchCardPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
