import { CalendarService } from './calendar.service';
import { Day } from '../interfaces';
import * as i0 from "@angular/core";
export declare class DayService {
    private calendarService;
    day: Day;
    constructor(calendarService: CalendarService);
    private getIsDisabled;
    createDay(date: Date): Day;
    getIsInPeriod(date: Date): boolean;
    getDay(): Day;
    sortByDate(a: any, b: any): 1 | -1 | 0;
    toggleDate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DayService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DayService>;
}
