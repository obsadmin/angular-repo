import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BlogComponent  } from './blog/blog.component';
import { RouterModule, Routes } from '@angular/router';
import {appRoutes} from './routing'
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot(
      appRoutes) ],
  declarations: [ AppComponent, HelloComponent , BlogComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
