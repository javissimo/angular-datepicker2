import { CalendarService } from './calendar.service';
import * as i0 from "@angular/core";
export declare class MonthService {
    private calendarService;
    constructor(calendarService: CalendarService);
    getMonth(date: Date): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<MonthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MonthService>;
}
