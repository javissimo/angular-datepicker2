import { OnInit, ElementRef } from '@angular/core';
import { CalendarService } from '../_service/calendar.service';
import * as i0 from "@angular/core";
export declare class MonthSelectComponent implements OnInit {
    private calendarService;
    constructor(calendarService: CalendarService);
    date: Date;
    elementView: ElementRef;
    months: any[];
    animationStep: string;
    ngOnInit(): void;
    setMonth(month: Date): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MonthSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MonthSelectComponent, "app-month-select", never, { "date": "date"; }, {}, never, never>;
}
