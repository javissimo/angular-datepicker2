import { BehaviorSubject } from 'rxjs';
import { Day, DisabledDates, ViewMode } from '../interfaces';
import * as i0 from "@angular/core";
declare global {
    interface Date {
        adjustMonth(number: number): Date;
        adjustDate(number: number): Date;
        adjustYear(number: number): Date;
        getFirstDateDay(start: number): number;
        getDayWithStart(start: number): number;
        getYmd(): string;
    }
}
export declare class CalendarService {
    calendar: Date[];
    shownDate: Date;
    viewMode: number | ViewMode;
    viewSelectorMode: string;
    selectMode: string;
    selectedDates: BehaviorSubject<Date[]>;
    disabledDates: BehaviorSubject<DisabledDates>;
    days: BehaviorSubject<Day[]>;
    countMonths: number;
    weekStart: number;
    weekends: number[];
    animationStep: BehaviorSubject<string>;
    recountWidth: BehaviorSubject<number>;
    /** Needs for onClickDay detect change */
    clickDayKey: BehaviorSubject<{
        day: Day;
        key: string;
    } | null>;
    updateDate: BehaviorSubject<Date>;
    constructor();
    setSelectedDates(selectedDates: Date[]): void;
    setDisabledDates(disabledDates: DisabledDates): void;
    setDays(days: Day[]): void;
    setShownDate(date: Date): void;
    addSelected(date: Date): void;
    getCountMonths(): number;
    getLastDate(date?: Date): Date;
    getShownYears(lastDateShown: Date): void;
    getShownMonths(date?: Date): void;
    goPrev(firstDate: Date): void;
    goNext(lastDate: Date): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CalendarService>;
}
