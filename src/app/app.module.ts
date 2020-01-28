import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { HttpClientModule }  from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  entryComponents: [UsersComponent],
  providers: [],
  bootstrap: [AppComponent,
    UsersComponent]
})
export class AppModule { }
