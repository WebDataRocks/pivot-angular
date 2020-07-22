import { Component, ElementRef, Input, Output, EventEmitter, OnInit } from '@angular/core';
import * as WebDataRocks from 'webdatarocks';
@Component({
    selector: 'app-wbr-pivot',
    template: `<div><div class='wbr-ng-wrapper'></div></div>`
})
export class WebdatarocksComponent implements OnInit{
    // params
    @Input() toolbar: boolean;
    @Input() width: string | number;
    @Input() height: string | number;
    @Input() report: WebDataRocks.Report | string;
    @Input() global: WebDataRocks.Report;
    @Input() customizeCell: (cell: WebDataRocks.CellBuilder, data: WebDataRocks.CellData) => void;
    // events
    @Output() cellclick: EventEmitter<WebDataRocks.CellData> = new EventEmitter();
    @Output() celldoubleclick: EventEmitter<WebDataRocks.CellData> = new EventEmitter();
    @Output() dataerror: EventEmitter<object> = new EventEmitter();
    @Output() datafilecancelled: EventEmitter<object> = new EventEmitter();
    @Output() dataloaded: EventEmitter<object> = new EventEmitter();
    @Output() datachanged: EventEmitter<object> = new EventEmitter();
    @Output() fieldslistclose: EventEmitter<object> = new EventEmitter();
    @Output() fieldslistopen: EventEmitter<object> = new EventEmitter();
    @Output() filteropen: EventEmitter<object> = new EventEmitter();
    @Output() fullscreen: EventEmitter<object> = new EventEmitter();
    @Output() loadingdata: EventEmitter<object> = new EventEmitter();
    @Output() loadinglocalization: EventEmitter<object> = new EventEmitter();
    @Output() loadingreportfile: EventEmitter<object> = new EventEmitter();
    @Output() localizationerror: EventEmitter<object> = new EventEmitter();
    @Output() localizationloaded: EventEmitter<object> = new EventEmitter();
    @Output() openingreportfile: EventEmitter<object> = new EventEmitter();
    @Output() querycomplete: EventEmitter<object> = new EventEmitter();
    @Output() queryerror: EventEmitter<object> = new EventEmitter();
    @Output() ready: EventEmitter<WebDataRocks.Pivot> = new EventEmitter();
    @Output() reportchange: EventEmitter<object> = new EventEmitter();
    @Output() reportcomplete: EventEmitter<object> = new EventEmitter();
    @Output() reportfilecancelled: EventEmitter<object> = new EventEmitter();
    @Output() reportfileerror: EventEmitter<object> = new EventEmitter();
    @Output() reportfileloaded: EventEmitter<object> = new EventEmitter();
    @Output() runningquery: EventEmitter<object> = new EventEmitter();
    @Output() update: EventEmitter<object> = new EventEmitter();
    @Output() beforetoolbarcreated: EventEmitter<object> = new EventEmitter();
    @Output() aftergriddraw: EventEmitter<object> = new EventEmitter();
    @Output() beforegriddraw: EventEmitter<object> = new EventEmitter();
    // api
    public webDataRocks: WebDataRocks.Pivot;
    // private
    private root: HTMLElement;

    constructor(private el: ElementRef) {  }

    ngOnInit() {
      this.root = this.el.nativeElement as HTMLElement;
      this.webDataRocks = new WebDataRocks({
          container: this.root.getElementsByClassName('wbr-ng-wrapper')[0],
          width: this.width,
          height: this.height,
          toolbar: this.toolbar,
          report: this.report,
          global: this.global,
          customizeCell: this.customizeCell,
          cellclick: (cell: WebDataRocks.CellData) => this.cellclick.next(cell),
          celldoubleclick: (cell: WebDataRocks.CellData) => this.celldoubleclick.next(cell),
          dataerror: (event: object) => this.dataerror.next(event),
          datafilecancelled: () => this.datafilecancelled.next(),
          dataloaded: () => this.dataloaded.next(),
          datachanged: (event: object) => this.datachanged.next(event),
          fieldslistclose: () => this.fieldslistclose.next(),
          fieldslistopen: () => this.fieldslistopen.next(),
          filteropen: () => this.filteropen.next(),
          loadingdata: () => this.loadingdata.next(),
          loadinglocalization: () => this.loadinglocalization.next(),
          loadingreportfile: () => this.loadingreportfile.next(),
          localizationerror: () => this.localizationerror.next(),
          localizationloaded: () => this.localizationloaded.next(),
          openingreportfile: () => this.openingreportfile.next(),
          querycomplete: () => this.querycomplete.next(),
          queryerror: () => this.queryerror.next(),
          ready: () => this.ready.next(this.webDataRocks),
          reportchange: () => this.reportchange.next(),
          reportcomplete: () => this.reportcomplete.next(),
          reportfilecancelled: () => this.reportfilecancelled.next(),
          reportfileerror: () => this.reportfileerror.next(),
          reportfileloaded: () => this.reportfileloaded.next(),
          runningquery: () => this.runningquery.next(),
          update: () => this.update.next(),
          beforetoolbarcreated: (toolbar: object) => this.beforetoolbarcreated.next(toolbar),
          aftergriddraw: (event: object) => this.aftergriddraw.next(event),
          beforegriddraw: (event: object) => this.beforegriddraw.next(event)
      });
    }
}
