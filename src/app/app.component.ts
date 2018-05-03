import { Component, ViewChild } from '@angular/core';
import { WebDataRocksPivot } from "./webdatarocks/webdatarocks.angular4";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('pivot1') child: WebDataRocksPivot;

  onPivotReady(pivot: WebDataRocks.Pivot): void {
        console.log("[ready] WebDataRocksPivot", this.child);
    }

    onCustomizeCell(cell: WebDataRocks.CellBuilder, data: WebDataRocks.Cell): void {
      //console.log("[customizeCell] WebDataRocksPivot");
      if (data.isClassicTotalRow) cell.addClass("fm-total-classic-r");
      if (data.isGrandTotalRow) cell.addClass("fm-grand-total-r");
      if (data.isGrandTotalColumn) cell.addClass("fm-grand-total-c");
    }

  onReportComplete(): void {
    this.child.webDataRocks.off("reportcomplete");
    this.child.webDataRocks.setReport({
      dataSource: {
        filename: "https://cdn.webdatarocks.com/data/data.json"
      }
    });
  }
}
