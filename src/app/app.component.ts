import { Component, signal } from '@angular/core';
import { WebdatarocksPivotModule } from "@webdatarocks/ngx-webdatarocks";
import { TopMenuComponent } from '../components/top-menu/top-menu.component';

@Component({
  selector: 'app-root',
  imports: [WebdatarocksPivotModule, TopMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('vite-project');
}
