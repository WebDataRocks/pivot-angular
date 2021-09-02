import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebdatarocksPivotModule } from 'ng-webdatarocks';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebdatarocksPivotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
