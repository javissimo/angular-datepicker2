import { OnInit, OnChanges, AfterViewChecked, EventEmitter, ChangeDetectorRef, AfterViewInit, QueryList } from '@angular/core';
import { CalendarService } from '../_service/calendar.service';
import { Day, SelectMode, ViewMode, DisabledDates } from '../interfaces';
import { DayDirective } from '../day.directive';
import * as i0 from "@angular/core";
export declare class CustomDatepickerComponent implements OnInit, OnChanges, AfterViewChecked, AfterViewInit {
    private calendarService;
    private cdr;
    /**
     * @description
     *  Array of selected dates.
     * */
    selectedDates: Date[];
    selectedDatesChange: EventEmitter<Date[]>;
    /**
     * @description
     *  Callback event when click on day
     */
    onDayClick: EventEmitter<Day>;
    /**
     * @description
     *  Array custom definitions of days. Subscribable
     * @see `Day`
     * */
    days: Day[];
    /**
     * @description
     *  Date whould be render for default calendar .
     * */
    shownDate: Date;
    /**
     * @description
     * Present mode of calendar. Year, quarter, semester or qty months. Default 1.
     * */
    viewMode: ViewMode | number;
    /**
     * @description
     * Start week day, default 0
     */
    weekStart: number;
    /**
     * @description
     * Weekends, default [0,6], set Day.isWeekend true
     */
    weekends: number[];
    /**
     * @description
     * Single, Multiple, Period
     * @See `SelectMode`
     */
    selectMode: SelectMode;
    /**
     * @description
     * Disable select dates. Before after date or array
     * @See `DisabledDates`
     */
    disabledDates: DisabledDates;
    columns: any;
    width: number | null;
    dayDirectivesQueryList: QueryList<DayDirective>;
    dayDirectives: DayDirective[];
    constructor(calendarService: CalendarService, cdr: ChangeDetectorRef);
    private __getDirectives;
    ngAfterViewInit(): void;
    getMonthDayDirectives(date: Date): DayDirective[];
    recountWidth(): void;
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    getCalendar(): Date[];
    getViewSelectorMode(): string;
    calculate(): any[];
    isEqual(array: any, array1: any): boolean;
    private _viewMode;
    private _selectMode;
    private _shownDate;
    ngOnChanges(simpleChange: any): void;
    goNext(): void;
    goPrev(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDatepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomDatepickerComponent, "ngx-custom-datepicker", never, { "selectedDates": "selectedDates"; "days": "days"; "shownDate": "shownDate"; "viewMode": "viewMode"; "weekStart": "weekStart"; "weekends": "weekends"; "selectMode": "selectMode"; "disabledDates": "disabledDates"; }, { "selectedDatesChange": "selectedDatesChange"; "onDayClick": "onDayClick"; }, ["dayDirectivesQueryList"], never>;
}
