import { OnInit, OnChanges, OnDestroy, ViewContainerRef } from '@angular/core';
import { CalendarService } from '../_service/calendar.service';
import { DayService } from '../_service/day.service';
import { Subscription } from 'rxjs';
import { DayDirective } from '../day.directive';
import * as i0 from "@angular/core";
export declare class DayViewComponent implements OnInit, OnChanges, OnDestroy {
    dayService: DayService;
    private calendarService;
    date: Date;
    thisMonth: boolean;
    dayDirective: DayDirective;
    template: ViewContainerRef;
    sub: Subscription;
    sub1: Subscription;
    constructor(dayService: DayService, calendarService: CalendarService);
    createChildComponent(): void;
    isStartOrEndDatePeriod(): false | "end" | "start";
    getSelectedDates(): Date[];
    getSelectMode(): string;
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    onClick(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DayViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DayViewComponent, "app-day-view", never, { "date": "date"; "thisMonth": "thisMonth"; "dayDirective": "dayDirective"; }, {}, never, never>;
}
