import { Component, ElementRef, Input, Output, EventEmitter } from "@angular/core";
import * as WebDataRocks from "webdatarocks";

@Component({
    selector: "wbr-pivot",
    template: "<div><div class='wbr-ng-wrapper'></div></div>"
})
export class WebDataRocksPivot {
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
    @Output() dataerror: EventEmitter<Object> = new EventEmitter();
    @Output() datafilecancelled: EventEmitter<Object> = new EventEmitter();
    @Output() dataloaded: EventEmitter<Object> = new EventEmitter();
    @Output() datachanged: EventEmitter<Object> = new EventEmitter();
    @Output() fieldslistclose: EventEmitter<Object> = new EventEmitter();
    @Output() fieldslistopen: EventEmitter<Object> = new EventEmitter();
    @Output() filteropen: EventEmitter<Object> = new EventEmitter();
    @Output() fullscreen: EventEmitter<Object> = new EventEmitter();
    @Output() loadingdata: EventEmitter<Object> = new EventEmitter();
    @Output() loadinglocalization: EventEmitter<Object> = new EventEmitter();
    @Output() loadingreportfile: EventEmitter<Object> = new EventEmitter();
    @Output() localizationerror: EventEmitter<Object> = new EventEmitter();
    @Output() localizationloaded: EventEmitter<Object> = new EventEmitter();
    @Output() openingreportfile: EventEmitter<Object> = new EventEmitter();
    @Output() querycomplete: EventEmitter<Object> = new EventEmitter();
    @Output() queryerror: EventEmitter<Object> = new EventEmitter();
    @Output() ready: EventEmitter<WebDataRocks.Pivot> = new EventEmitter();
    @Output() reportchange: EventEmitter<Object> = new EventEmitter();
    @Output() reportcomplete: EventEmitter<Object> = new EventEmitter();
    @Output() reportfilecancelled: EventEmitter<Object> = new EventEmitter();
    @Output() reportfileerror: EventEmitter<Object> = new EventEmitter();
    @Output() reportfileloaded: EventEmitter<Object> = new EventEmitter();
    @Output() runningquery: EventEmitter<Object> = new EventEmitter();
    @Output() update: EventEmitter<Object> = new EventEmitter();
    @Output() beforetoolbarcreated: EventEmitter<Object> = new EventEmitter();
    @Output() aftergriddraw: EventEmitter<Object> = new EventEmitter();
    @Output() beforegriddraw: EventEmitter<Object> = new EventEmitter();
    // api
    public webDataRocks: WebDataRocks.Pivot;
    // private
    private root: HTMLElement;

    constructor(el: ElementRef) {
        this.root = <HTMLElement>el.nativeElement;
    }

    ngOnInit() {
        this.webDataRocks = new WebDataRocks({
            container: this.root.getElementsByClassName("wbr-ng-wrapper")[0],
            width: this.width,
            height: this.height,
            toolbar: this.toolbar,
            report: this.report,
            global: this.global,
            customizeCell: this.customizeCell,
            cellclick: (cell: WebDataRocks.CellData) => this.cellclick.next(cell),
            celldoubleclick: (cell: WebDataRocks.CellData) => this.celldoubleclick.next(cell),
            dataerror: (event: Object) => this.dataerror.next(event),
            datafilecancelled: () => this.datafilecancelled.next(),
            dataloaded: () => this.dataloaded.next(),
            datachanged: (event: Object) => this.datachanged.next(event),
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
            beforetoolbarcreated: (toolbar: Object) => this.beforetoolbarcreated.next(toolbar),
            aftergriddraw: (event: Object) => this.aftergriddraw.next(event),
            beforegriddraw: (event: Object) => this.beforegriddraw.next(event)
        });
    }
}