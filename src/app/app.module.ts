import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebdatarocksComponent } from './webdatarocks/webdatarocks.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, WebdatarocksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
