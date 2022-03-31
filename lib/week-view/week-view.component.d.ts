import { OnInit } from '@angular/core';
import { DayDirective } from '../day.directive';
import { WeekService } from '../_service/week.service';
import * as i0 from "@angular/core";
export declare class WeekViewComponent implements OnInit {
    private weekService;
    date: Date;
    firstMonthDate: Date;
    dayDirectives: DayDirective[];
    dates: Date[] | null[];
    constructor(weekService: WeekService);
    ngOnInit(): void;
    getDayDirective(date: Date): DayDirective;
    static ɵfac: i0.ɵɵFactoryDeclaration<WeekViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WeekViewComponent, "app-week-view", never, { "date": "date"; "firstMonthDate": "firstMonthDate"; "dayDirectives": "dayDirectives"; }, {}, never, never>;
}
