import { OnInit, ElementRef, OnDestroy } from '@angular/core';
import { CalendarService } from '../_service/calendar.service';
import { MonthService } from '../_service/month.service';
import { Subscription } from 'rxjs';
import { DayDirective } from '../day.directive';
import * as i0 from "@angular/core";
export declare class MonthViewComponent implements OnInit, OnDestroy {
    private monthService;
    private calendarService;
    date: Date;
    updateDate: any;
    dayDirectives: DayDirective[];
    elWidth: number;
    elementView: ElementRef;
    weeks: Date[] | null[];
    animationStep: string;
    weekDays: Date[];
    subscription: Subscription;
    constructor(monthService: MonthService, calendarService: CalendarService);
    showYears(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    getWeekDayDirectives(weekStartDate: Date): DayDirective[];
    static ɵfac: i0.ɵɵFactoryDeclaration<MonthViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MonthViewComponent, "app-month-view", never, { "date": "date"; "updateDate": "updateDate"; "dayDirectives": "dayDirectives"; }, { "elWidth": "elWidth"; }, never, never>;
}
