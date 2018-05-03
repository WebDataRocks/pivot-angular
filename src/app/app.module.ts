import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebDataRocksPivot } from "./webdatarocks.angular4";


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, WebDataRocksPivot
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
