import { Component, ElementRef, Input, Output, EventEmitter } from "@angular/core";

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
    @Input() customizeCell: (cell: WebDataRocks.CellBuilder, data: WebDataRocks.Cell) => void;
    // events
    @Output() cellclick: EventEmitter<WebDataRocks.Cell> = new EventEmitter();
    @Output() celldoubleclick: EventEmitter<WebDataRocks.Cell> = new EventEmitter();
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
        this.webDataRocks = window["WebDataRocks"]({
            container: this.root.getElementsByClassName("wbr-ng-wrapper")[0],
            width: this.width,
            height: this.height,
            toolbar: this.toolbar,
            report: this.report,
            global: this.global,
            customizeCell: this.customizeCell,
            cellclick: (cell: WebDataRocks.Cell) => this.cellclick.next(cell),
            celldoubleclick: (cell: WebDataRocks.Cell) => this.celldoubleclick.next(cell),
            dataerror: (event: Object) => this.dataerror.next(event),
            datafilecancelled: (event: Object) => this.datafilecancelled.next(event),
            dataloaded: (event: Object) => this.dataloaded.next(event),
            datachanged: (event: Object) => this.datachanged.next(event),
            fieldslistclose: (event: Object) => this.fieldslistclose.next(event),
            fieldslistopen: (event: Object) => this.fieldslistopen.next(event),
            filteropen: (event: Object) => this.filteropen.next(event),
            fullscreen: (event: Object) => this.fullscreen.next(event),
            loadingdata: (event: Object) => this.loadingdata.next(event),
            loadinglocalization: (event: Object) => this.loadinglocalization.next(event),
            loadingreportfile: (event: Object) => this.loadingreportfile.next(event),
            localizationerror: (event: Object) => this.localizationerror.next(event),
            localizationloaded: (event: Object) => this.localizationloaded.next(event),
            openingreportfile: (event: Object) => this.openingreportfile.next(event),
            querycomplete: (event: Object) => this.querycomplete.next(event),
            queryerror: (event: Object) => this.queryerror.next(event),
            ready: () => this.ready.next(this.webDataRocks),
            reportchange: (event: Object) => this.reportchange.next(event),
            reportcomplete: (event: Object) => this.reportcomplete.next(event),
            reportfilecancelled: (event: Object) => this.reportfilecancelled.next(event),
            reportfileerror: (event: Object) => this.reportfileerror.next(event),
            reportfileloaded: (event: Object) => this.reportfileloaded.next(event),
            runningquery: (event: Object) => this.runningquery.next(event),
            update: (event: Object) => this.update.next(event),
            beforetoolbarcreated: (toolbar: Object) => this.beforetoolbarcreated.next(toolbar),
            aftergriddraw: (event: Object) => this.aftergriddraw.next(event),
            beforegriddraw: (event: Object) => this.beforegriddraw.next(event)
        });
    }
}