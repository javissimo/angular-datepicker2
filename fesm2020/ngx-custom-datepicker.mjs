import * as i0 from '@angular/core';
import { Injectable, Directive, Input, ViewContainerRef, Component, ViewChild, Output, HostBinding, EventEmitter, ViewEncapsulation, ViewChildren, ContentChildren, NgModule } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';

/**
 * @publicApi
 */
var SelectMode;
(function (SelectMode) {
    SelectMode["Single"] = "single";
    SelectMode["Multiple"] = "multiple";
    SelectMode["Period"] = "period";
})(SelectMode || (SelectMode = {}));
var ViewMode;
(function (ViewMode) {
    ViewMode["Year"] = "year";
    ViewMode["Quarter"] = "quarter";
    ViewMode["Semester"] = "semester";
})(ViewMode || (ViewMode = {}));

Date.prototype.adjustDate = function (num = 0) {
    const date = new Date(this);
    date.setDate(date.getDate() + num);
    return date;
};
/** Adjust & setDate = 1 */
Date.prototype.adjustMonth = function (num = 0) {
    this.setDate(1);
    this.setMonth(this.getMonth() + num);
    return this;
};
/** Adjust & setDate = 1 */
Date.prototype.adjustYear = function (num = 0) {
    this.setDate(1);
    this.setMonth(0);
    this.setYear(this.getFullYear() + num);
    return this;
};
Date.prototype.getDayWithStart = function (start) {
    const date = new Date(this.getTime());
    let day = date.getDay();
    day = day - start;
    if (day < 0) {
        day = 7 + day;
    }
    return day;
};
Date.prototype.getFirstDateDay = function (start) {
    const date = new Date(this.getTime());
    date.setDate(1);
    return date.getDayWithStart(start);
};
Date.prototype.getYmd = function () {
    return (this.getFullYear().toString() +
        String(this.getMonth().toString()).padStart(2, '0') +
        String(this.getDate().toString()).padStart(2, '0'));
};
class CalendarService {
    constructor() {
        this.selectedDates = new BehaviorSubject([]);
        this.disabledDates = new BehaviorSubject(null);
        this.days = new BehaviorSubject([]);
        this.animationStep = new BehaviorSubject('stop');
        this.recountWidth = new BehaviorSubject(1);
        /** Needs for onClickDay detect change */
        this.clickDayKey = new BehaviorSubject(null);
        this.updateDate = new BehaviorSubject(new Date());
    }
    setSelectedDates(selectedDates) {
        this.selectedDates.next(selectedDates);
    }
    setDisabledDates(disabledDates) {
        this.disabledDates.next(disabledDates);
    }
    setDays(days) {
        this.days.next(days);
    }
    setShownDate(date) {
        this.shownDate = date;
    }
    addSelected(date) {
        this.selectedDates.value.push(date);
        this.selectedDates.next(this.selectedDates.value);
    }
    getCountMonths() {
        const viewMode = this.viewMode;
        if (typeof viewMode === 'number')
            return viewMode;
        if (viewMode === ViewMode.Quarter)
            return 3;
        else if (viewMode === ViewMode.Semester)
            return 6;
        return 1;
    }
    getLastDate(date) {
        const viewMode = this.viewMode;
        let lastDate = this.shownDate
            ? new Date(this.shownDate)
            : this.selectedDates.value
                ? new Date(this.selectedDates[this.selectedDates.value.length - 1])
                : new Date();
        lastDate = date ? new Date(date) : lastDate;
        //if (typeof viewMode === "ViewMode") {
        if (viewMode === ViewMode.Quarter) {
            if (lastDate.getMonth() >= 0 && lastDate.getMonth() <= 2) {
                lastDate.setMonth(2);
            }
            else if (lastDate.getMonth() >= 3 && lastDate.getMonth() <= 5) {
                lastDate.setMonth(5);
            }
            else if (lastDate.getMonth() >= 6 && lastDate.getMonth() <= 8) {
                lastDate.setMonth(8);
            }
            else if (lastDate.getMonth() >= 9 && lastDate.getMonth() <= 11) {
                lastDate.setMonth(11);
            }
        }
        else if (viewMode === ViewMode.Semester) {
            if (lastDate.getMonth() >= 0 && lastDate.getMonth() <= 5) {
                lastDate.setMonth(5);
            }
            else if (lastDate.getMonth() >= 6 && lastDate.getMonth() <= 11) {
                lastDate.setMonth(11);
            }
        }
        return lastDate;
    }
    getShownYears(lastDateShown) {
        let countMonths = 0;
        const months = [];
        countMonths = this.getCountMonths();
        this.countMonths = countMonths;
        for (let i = countMonths - 1; i >= 0; i--) {
            months.push(new Date(lastDateShown).adjustYear(-i));
        }
        this.calendar = months;
        this.viewSelectorMode = 'months';
    }
    getShownMonths(date) {
        let countMonths = 0;
        const months = [];
        const lastDate = this.getLastDate(date);
        countMonths = this.getCountMonths();
        this.countMonths = countMonths;
        for (let i = countMonths - 1; i >= 0; i--) {
            months.push(new Date(lastDate).adjustMonth(-i));
        }
        this.calendar = months;
        this.viewSelectorMode = 'days';
    }
    goPrev(firstDate) {
        const prevDate = new Date(firstDate);
        if (this.viewSelectorMode === 'days') {
            prevDate.adjustMonth(-1);
        }
        else if (this.viewSelectorMode === 'months') {
            prevDate.adjustYear(-1);
        }
        let dates = [...this.calendar];
        dates.unshift(prevDate);
        this.calendar = dates;
        this.animationStep.next('left');
        setTimeout(() => {
            dates = [...this.calendar];
            dates.splice(dates.length - 1, 1);
            this.calendar = dates;
            this.animationStep.next('stop');
        }, 205);
    }
    goNext(lastDate) {
        const nextDate = new Date(lastDate);
        if (this.viewSelectorMode === 'days') {
            nextDate.adjustMonth(1);
        }
        else if (this.viewSelectorMode === 'months') {
            nextDate.adjustYear(1);
        }
        let dates = [...this.calendar];
        dates.push(nextDate);
        this.calendar = dates;
        this.animationStep.next('right');
        setTimeout(() => {
            dates = [...this.calendar];
            dates.splice(0, 1);
            this.calendar = dates;
            this.animationStep.next('stop');
        }, 205);
    }
}
/** @nocollapse */ CalendarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CalendarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ CalendarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CalendarService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CalendarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class DayDirective {
    constructor(template, container) {
        this.template = template;
        this.container = container;
        this.context = null;
        this.__created = false;
    }
    set day(date) {
        this.context = {
            $implicit: date
        };
    }
    ngOnInit() {
        this.context = {
            $implicit: this.date,
            date: this.date
        };
    }
}
/** @nocollapse */ DayDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DayDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ DayDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.0", type: DayDirective, selector: "[ad2day]", inputs: { date: ["ad2dayFrom", "date"], day: "day" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DayDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ad2day]'
                    //providers: [TemplateRef],
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }]; }, propDecorators: { date: [{
                type: Input,
                args: ['ad2dayFrom']
            }], day: [{
                type: Input
            }] } });

class MonthService {
    constructor(calendarService) {
        this.calendarService = calendarService;
    }
    getMonth(date) {
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const weekStart = this.calendarService.weekStart;
        const countWeek = Math.ceil((daysInMonth + date.getFirstDateDay(weekStart)) / 7);
        const weeks = [];
        for (let i = 0; i < countWeek; i++) {
            const startWeekDate = new Date(date);
            startWeekDate.setDate(date.getDate() + i * 7 - date.getDayWithStart(weekStart));
            weeks.push(startWeekDate);
        }
        return weeks;
    }
}
/** @nocollapse */ MonthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthService, deps: [{ token: CalendarService }], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ MonthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: CalendarService }]; } });

class WeekService {
    getWeek(date) {
        const dayInWeek = 7;
        const days = [];
        for (let i = 0; i < dayInWeek; i++) {
            const curDate = new Date(date);
            curDate.setDate(curDate.getDate() + i);
            days.push(curDate);
        }
        return days;
    }
}
/** @nocollapse */ WeekService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: WeekService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ WeekService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: WeekService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: WeekService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class DayService {
    constructor(calendarService) {
        this.calendarService = calendarService;
    }
    getIsDisabled(date) {
        const disabledDates = this.calendarService.disabledDates.value;
        if (!disabledDates) {
            return false;
        }
        if (disabledDates.dates &&
            disabledDates.dates.length > 0 &&
            disabledDates.dates.find((disableDate) => disableDate.getTime() === date.getTime())) {
            return true;
        }
        if (disabledDates.after && disabledDates.after.getTime() < date.getTime()) {
            return true;
        }
        if (disabledDates.before && disabledDates.before.getTime() > date.getTime()) {
            return true;
        }
        return false;
    }
    createDay(date) {
        this.day = {
            isDisabled: this.getIsDisabled(date),
            isWeekEnd: this.calendarService.weekends.includes(date.getDay()),
            isSelected: false,
            isHovered: false,
            isInPeriod: this.getIsInPeriod(date),
            date: date
        };
        return this.day;
    }
    getIsInPeriod(date) {
        if (this.calendarService.selectMode === 'period' &&
            this.calendarService.selectedDates.value.length == 2 &&
            date.getTime() >= this.calendarService.selectedDates.value[0].getTime() &&
            date.getTime() <= this.calendarService.selectedDates.value[1].getTime()) {
            return true;
        }
        return false;
    }
    getDay() {
        return this.day;
    }
    sortByDate(a, b) {
        if (a.getTime() > b.getTime())
            return 1;
        if (a.getTime() == b.getTime())
            return 0;
        if (a.getTime() < b.getTime())
            return -1;
    }
    toggleDate() {
        this.calendarService.clickDayKey.next({
            key: new Date().getYmd() + '' + Math.random(),
            day: this.day
        });
        if (this.calendarService.selectMode === 'single') {
            if (this.calendarService.selectedDates.value.length > 0) {
                this.calendarService.selectedDates.next([this.day.date]);
            }
        }
        else if (this.calendarService.selectMode === 'multiple') {
            if (this.day.isSelected) {
                const selectedDates = this.calendarService.selectedDates.value.filter((elem) => elem.getYmd() !== this.day.date.getYmd());
                selectedDates.sort(this.sortByDate);
                this.calendarService.selectedDates.next(selectedDates);
            }
            else {
                const selectedDates = this.calendarService.selectedDates.value;
                selectedDates.push(this.day.date);
                this.calendarService.selectedDates.next(selectedDates);
            }
        }
        else if (this.calendarService.selectMode === 'period') {
            if (this.day.isSelected) {
                const selectedDates = this.calendarService.selectedDates.value.filter((elem) => elem.getYmd() !== this.day.date.getYmd());
                this.calendarService.selectedDates.next(selectedDates);
            }
            else {
                if (this.calendarService.selectedDates.value.length == 2) {
                    this.calendarService.selectedDates.next([this.day.date]);
                }
                else if (this.calendarService.selectedDates.value.length < 2) {
                    const selectedDates = this.calendarService.selectedDates.value;
                    selectedDates.push(this.day.date);
                    selectedDates.sort(this.sortByDate);
                    this.calendarService.selectedDates.next(selectedDates);
                }
            }
        }
    }
}
/** @nocollapse */ DayService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DayService, deps: [{ token: CalendarService }], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ DayService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DayService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DayService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: CalendarService }]; } });

class DayViewComponent {
    constructor(dayService, calendarService) {
        this.dayService = dayService;
        this.calendarService = calendarService;
    }
    createChildComponent() {
        const viewContainerRef = this.template;
        viewContainerRef.clear();
        viewContainerRef.createEmbeddedView(this.dayDirective.template, this.dayDirective.context);
    }
    isStartOrEndDatePeriod() {
        if (this.getSelectMode() === 'period' && this.getSelectedDates().length == 2) {
            if (this.date.getYmd() === this.getSelectedDates()[0].getYmd())
                return 'start';
            if (this.date.getYmd() === this.getSelectedDates()[1].getYmd())
                return 'end';
        }
        return false;
    }
    getSelectedDates() {
        return this.calendarService.selectedDates.value;
    }
    getSelectMode() {
        return this.calendarService.selectMode;
    }
    ngAfterViewInit() {
        if (this.dayDirective && this.template) {
            this.createChildComponent();
        }
    }
    // bad idea, too mach subscribes for every day
    ngOnInit() {
        this.dayService.createDay(this.date);
        this.sub = this.calendarService.selectedDates.subscribe((data) => {
            const days = data.map((item) => item.getYmd());
            this.dayService.day.isSelected = days.includes(this.dayService.day.date.getYmd());
            this.dayService.day.isInPeriod = this.dayService.getIsInPeriod(this.dayService.day.date);
        });
    }
    ngOnChanges() {
        if (this.dayDirective && this.template) {
            this.createChildComponent();
        }
    }
    onClick() {
        !this.dayService.day.isDisabled ? this.dayService.toggleDate() : null;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
/** @nocollapse */ DayViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DayViewComponent, deps: [{ token: DayService }, { token: CalendarService }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ DayViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: DayViewComponent, selector: "app-day-view", inputs: { date: "date", thisMonth: "thisMonth", dayDirective: "dayDirective" }, providers: [DayService], viewQueries: [{ propertyName: "template", first: true, predicate: ["tpl"], descendants: true, read: ViewContainerRef }], usesOnChanges: true, ngImport: i0, template: "<div class=\"dayWrap\">\n  <div\n    class=\"styledDay\"\n    *ngIf=\"thisMonth\"\n    (click)=\"onClick()\"\n    [ngClass]=\"{\n      isDisabled: dayService.day.isDisabled,\n      isSelected: dayService.day.isSelected,\n      isWeekEnd: dayService.day.isWeekEnd,\n      isInPeriod: dayService.day.isInPeriod,\n      period: getSelectMode() === 'period',\n      end: isStartOrEndDatePeriod() === 'end',\n      start: isStartOrEndDatePeriod() === 'start'\n    }\"\n  >\n    <span *ngIf=\"!dayDirective\" class=\"day\">\n      {{ dayService.day.date | date: 'd' }}\n    </span>\n    <div class=\"dayDir\">\n      <ng-template #tpl></ng-template>\n    </div>\n  </div>\n</div>\n", directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "date": i4.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DayViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-day-view', providers: [DayService], template: "<div class=\"dayWrap\">\n  <div\n    class=\"styledDay\"\n    *ngIf=\"thisMonth\"\n    (click)=\"onClick()\"\n    [ngClass]=\"{\n      isDisabled: dayService.day.isDisabled,\n      isSelected: dayService.day.isSelected,\n      isWeekEnd: dayService.day.isWeekEnd,\n      isInPeriod: dayService.day.isInPeriod,\n      period: getSelectMode() === 'period',\n      end: isStartOrEndDatePeriod() === 'end',\n      start: isStartOrEndDatePeriod() === 'start'\n    }\"\n  >\n    <span *ngIf=\"!dayDirective\" class=\"day\">\n      {{ dayService.day.date | date: 'd' }}\n    </span>\n    <div class=\"dayDir\">\n      <ng-template #tpl></ng-template>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: DayService }, { type: CalendarService }]; }, propDecorators: { date: [{
                type: Input
            }], thisMonth: [{
                type: Input
            }], dayDirective: [{
                type: Input
            }], template: [{
                type: ViewChild,
                args: ['tpl', { static: false, read: ViewContainerRef }]
            }] } });

class WeekViewComponent {
    constructor(weekService) {
        this.weekService = weekService;
    }
    ngOnInit() {
        this.dates = this.weekService.getWeek(this.date);
    }
    getDayDirective(date) {
        const day = this.dayDirectives.find((directive) => directive.date.getTime() === date.getTime());
        return day;
    }
}
/** @nocollapse */ WeekViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: WeekViewComponent, deps: [{ token: WeekService }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ WeekViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: WeekViewComponent, selector: "app-week-view", inputs: { date: "date", firstMonthDate: "firstMonthDate", dayDirectives: "dayDirectives" }, providers: [WeekService], ngImport: i0, template: "<div *ngFor=\"let date of dates\" class=\"f1\">\n  <app-day-view\n    [dayDirective]=\"getDayDirective(date)\"\n    [date]=\"date\"\n    [thisMonth]=\"date.getMonth() === firstMonthDate.getMonth() && date.getFullYear() === firstMonthDate.getFullYear()\"\n  >\n  </app-day-view>\n</div>\n", styles: [""], components: [{ type: DayViewComponent, selector: "app-day-view", inputs: ["date", "thisMonth", "dayDirective"] }], directives: [{ type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: WeekViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-week-view', providers: [WeekService], template: "<div *ngFor=\"let date of dates\" class=\"f1\">\n  <app-day-view\n    [dayDirective]=\"getDayDirective(date)\"\n    [date]=\"date\"\n    [thisMonth]=\"date.getMonth() === firstMonthDate.getMonth() && date.getFullYear() === firstMonthDate.getFullYear()\"\n  >\n  </app-day-view>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: WeekService }]; }, propDecorators: { date: [{
                type: Input
            }], firstMonthDate: [{
                type: Input
            }], dayDirectives: [{
                type: Input
            }] } });

class MonthViewComponent {
    constructor(monthService, calendarService) {
        this.monthService = monthService;
        this.calendarService = calendarService;
        this.subscription = new Subscription();
    }
    showYears() {
        this.calendarService.getShownYears(this.date);
    }
    ngOnInit() {
        this.subscription.add(this.calendarService.animationStep.subscribe((data) => {
            this.animationStep = data;
        }));
        this.weeks = this.monthService.getMonth(this.date);
        const weekDays = [];
        for (let i = 0; i < 7; i++) {
            weekDays.push(this.weeks[0].adjustDate(i));
        }
        this.weekDays = weekDays;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getWeekDayDirectives(weekStartDate) {
        weekStartDate.setHours(0, 0, 0, 0);
        const weekEndDate = new Date(weekStartDate);
        weekEndDate.setDate(weekStartDate.getDate() + 7);
        weekEndDate.setHours(0, 0, 0, 0);
        const directives = this.dayDirectives.filter((directive) => directive.date.getTime() >= weekStartDate.getTime() && directive.date.getTime() < weekEndDate.getTime());
        return directives;
    }
}
/** @nocollapse */ MonthViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthViewComponent, deps: [{ token: MonthService }, { token: CalendarService }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ MonthViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: MonthViewComponent, selector: "app-month-view", inputs: { date: "date", updateDate: "updateDate", dayDirectives: "dayDirectives" }, outputs: { elWidth: "elWidth" }, host: { properties: { "style": "this.elWidth" } }, providers: [MonthService], viewQueries: [{ propertyName: "elementView", first: true, predicate: ["wrap"], descendants: true, static: true }], ngImport: i0, template: "<div #wrap class=\"monthWrap monthOne {{ animationStep }}\">\n  <div class=\"monthHeader\" (click)=\"showYears()\">\n    {{ date | date: 'LLLL yyyy' }}\n  </div>\n  <div class=\"weekWrap\" style=\"flexdirection: 'row'\">\n    <div style=\"display: flex; flexdirection: 'row'\">\n      <div *ngFor=\"let d of weekDays\" class=\"dayWeekTitle\">{{ d | date: 'EEEEE' }}</div>\n    </div>\n    <app-week-view\n      *ngFor=\"let weekStartDate of weeks\"\n      [date]=\"weekStartDate\"\n      [dayDirectives]=\"getWeekDayDirectives(weekStartDate)\"\n      [firstMonthDate]=\"date\"\n      style=\"flexdirection: 'row'\"\n    >\n    </app-week-view>\n  </div>\n</div>\n", components: [{ type: WeekViewComponent, selector: "app-week-view", inputs: ["date", "firstMonthDate", "dayDirectives"] }], directives: [{ type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "date": i4.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-month-view', providers: [MonthService], template: "<div #wrap class=\"monthWrap monthOne {{ animationStep }}\">\n  <div class=\"monthHeader\" (click)=\"showYears()\">\n    {{ date | date: 'LLLL yyyy' }}\n  </div>\n  <div class=\"weekWrap\" style=\"flexdirection: 'row'\">\n    <div style=\"display: flex; flexdirection: 'row'\">\n      <div *ngFor=\"let d of weekDays\" class=\"dayWeekTitle\">{{ d | date: 'EEEEE' }}</div>\n    </div>\n    <app-week-view\n      *ngFor=\"let weekStartDate of weeks\"\n      [date]=\"weekStartDate\"\n      [dayDirectives]=\"getWeekDayDirectives(weekStartDate)\"\n      [firstMonthDate]=\"date\"\n      style=\"flexdirection: 'row'\"\n    >\n    </app-week-view>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: MonthService }, { type: CalendarService }]; }, propDecorators: { date: [{
                type: Input
            }], updateDate: [{
                type: Input
            }], dayDirectives: [{
                type: Input
            }], elWidth: [{
                type: Output
            }, {
                type: HostBinding,
                args: ['style']
            }], elementView: [{
                type: ViewChild,
                args: ['wrap', { static: true }]
            }] } });

class MonthSelectComponent {
    constructor(calendarService) {
        this.calendarService = calendarService;
        this.months = [];
    }
    ngOnInit() {
        for (let i = 0; i < 12; i++) {
            const date = new Date(this.date);
            date.setMonth(0);
            date.adjustMonth(i);
            this.months.push(date);
        }
        this.calendarService.animationStep.subscribe((data) => {
            this.animationStep = data;
        });
    }
    setMonth(month) {
        this.calendarService.getShownMonths(month);
    }
}
/** @nocollapse */ MonthSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthSelectComponent, deps: [{ token: CalendarService }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ MonthSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: MonthSelectComponent, selector: "app-month-select", inputs: { date: "date" }, viewQueries: [{ propertyName: "elementView", first: true, predicate: ["wrap"], descendants: true, static: true }], ngImport: i0, template: "<div\n  #wrap\n  style=\"display: flex; flex-direction: column; flex: 1; width: 100%\"\n  class=\"monthWrap monthOne {{ animationStep }}\"\n>\n  <div class=\"monthHeader\">\n    {{ date | date: 'yyyy' }}\n  </div>\n  <div style=\"display: flex; flex-direction: row; flex: 1; flex-wrap: wrap\">\n    <ng-container *ngFor=\"let month of months; let i = index\">\n      <div class=\"monthItem\" (click)=\"setMonth(month)\">\n        {{ month | date: 'LLL' }}\n      </div>\n      <div *ngIf=\"(i + 1) % 3 === 0 && i != 0 && i != 11\" style=\"width: 100%; height: 1px\"></div>\n    </ng-container>\n  </div>\n</div>\n", directives: [{ type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "date": i4.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-month-select', template: "<div\n  #wrap\n  style=\"display: flex; flex-direction: column; flex: 1; width: 100%\"\n  class=\"monthWrap monthOne {{ animationStep }}\"\n>\n  <div class=\"monthHeader\">\n    {{ date | date: 'yyyy' }}\n  </div>\n  <div style=\"display: flex; flex-direction: row; flex: 1; flex-wrap: wrap\">\n    <ng-container *ngFor=\"let month of months; let i = index\">\n      <div class=\"monthItem\" (click)=\"setMonth(month)\">\n        {{ month | date: 'LLL' }}\n      </div>\n      <div *ngIf=\"(i + 1) % 3 === 0 && i != 0 && i != 11\" style=\"width: 100%; height: 1px\"></div>\n    </ng-container>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: CalendarService }]; }, propDecorators: { date: [{
                type: Input
            }], elementView: [{
                type: ViewChild,
                args: ['wrap', { static: true }]
            }] } });

class CustomDatepickerComponent {
    constructor(calendarService, cdr) {
        this.calendarService = calendarService;
        this.cdr = cdr;
        /**
         * @description
         *  Array of selected dates.
         * */
        this.selectedDates = [];
        this.selectedDatesChange = new EventEmitter();
        /**
         * @description
         *  Callback event when click on day
         */
        this.onDayClick = new EventEmitter();
        /**
         * @description
         * Start week day, default 0
         */
        this.weekStart = 0;
        /**
         * @description
         * Weekends, default [0,6], set Day.isWeekend true
         */
        this.weekends = [0, 6];
        this.dayDirectives = [];
    }
    __getDirectives() {
        if (this.dayDirectivesQueryList) {
            this.dayDirectives = this.dayDirectivesQueryList.toArray();
            this.dayDirectivesQueryList.changes.subscribe((data) => {
                this.dayDirectives = data.toArray();
            });
        }
    }
    ngAfterViewInit() {
        this.__getDirectives();
    }
    getMonthDayDirectives(date) {
        return this.dayDirectives.filter((directive) => directive.date.getMonth() === date.getMonth() && directive.date.getFullYear() === date.getFullYear());
    }
    recountWidth() {
        let width = 0;
        this.columns ? this.columns.toArray().map((item) => (width += item.elementView.nativeElement.clientWidth)) : null;
        this.calendarService.animationStep.value === 'stop' && this.calendarService.viewSelectorMode === 'days'
            ? (this.width = width)
            : null;
        this.cdr.detectChanges();
    }
    ngAfterViewChecked() {
        this.recountWidth();
    }
    ngOnInit() {
        if (!this.shownDate) {
            this.shownDate = new Date();
        }
        this.calendarService.animationStep.subscribe((data) => {
            if (data === 'stop') {
                setTimeout(() => this.recountWidth(), 10);
            }
        });
        this.calendarService.selectedDates.subscribe((data) => {
            this.selectedDatesChange.emit(data);
        });
        this.calendarService.clickDayKey.subscribe((data) => {
            data ? this.onDayClick.emit(data.day) : null;
        });
        this.calendarService.days.next(this.days);
        this.calendarService.weekStart = this.weekStart;
        this.calendarService.weekends = this.weekends;
        this.calendarService.viewMode = this.viewMode;
        this.calendarService.viewSelectorMode = 'days';
        this.calendarService.selectMode = this.selectMode;
        this.calendarService.shownDate = this.shownDate;
        this.calendarService.setSelectedDates(this.selectedDates);
        this.calendarService.setDays(this.days);
        this.calendarService.getShownMonths(this.shownDate);
        this.calendarService.setDisabledDates(this.disabledDates);
    }
    getCalendar() {
        return this.calendarService.calendar;
    }
    getViewSelectorMode() {
        return this.calendarService.viewSelectorMode;
    }
    calculate() {
        const date = this.shownDate;
        let countMonths = 0;
        const months = [];
        const lastDate = date ? date : this.calendarService.getLastDate();
        countMonths = this.calendarService.getCountMonths();
        for (let i = countMonths - 1; i >= 0; i--) {
            months.push(new Date(lastDate).adjustMonth(-i));
        }
        return months;
    }
    isEqual(array, array1) {
        console.log(array, array1);
        const a = array.filter((item) => array1.includes(item));
        return a.length === 0 && array.length === array1.length;
    }
    _viewMode(simpleChange) {
        if (simpleChange.viewMode.currentValue !== simpleChange.viewMode.previousValue) {
            this.calendarService.viewMode = simpleChange.viewMode.currentValue;
            this.calendarService.getShownMonths(this.shownDate);
            setTimeout(() => this.recountWidth(), 10);
        }
    }
    _selectMode(simpleChange) {
        if (simpleChange.selectMode.currentValue !== simpleChange.selectMode.previousValue) {
            this.calendarService.selectMode = simpleChange.selectMode.currentValue;
            this.calendarService.getShownMonths(this.shownDate);
            setTimeout(() => this.recountWidth(), 10);
        }
    }
    _shownDate(simpleChange) {
        if (simpleChange.shownDate.currentValue !== simpleChange.shownDate.previousValue) {
            this.calendarService.shownDate = simpleChange.shownDate.currentValue;
            this.calendarService.getShownMonths(this.shownDate);
            setTimeout(() => this.recountWidth(), 10);
        }
    }
    ngOnChanges(simpleChange) {
        simpleChange.viewMode && this._viewMode(simpleChange);
        simpleChange.selectMode && this._selectMode(simpleChange);
        simpleChange.shownDate && this._shownDate(simpleChange);
        simpleChange.days && this.calendarService.days.next(this.days);
        simpleChange.selectedDates && this.calendarService.setSelectedDates(this.selectedDates);
    }
    goNext() {
        const lastDate = this.calendarService.calendar[this.calendarService.calendar.length - 1];
        this.calendarService.goNext(lastDate);
    }
    goPrev() {
        const firstDate = this.calendarService.calendar[0];
        this.calendarService.goPrev(firstDate);
    }
}
/** @nocollapse */ CustomDatepickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CustomDatepickerComponent, deps: [{ token: CalendarService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ CustomDatepickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: CustomDatepickerComponent, selector: "ngx-custom-datepicker", inputs: { selectedDates: "selectedDates", days: "days", shownDate: "shownDate", viewMode: "viewMode", weekStart: "weekStart", weekends: "weekends", selectMode: "selectMode", disabledDates: "disabledDates" }, outputs: { selectedDatesChange: "selectedDatesChange", onDayClick: "onDayClick" }, providers: [CalendarService], queries: [{ propertyName: "dayDirectivesQueryList", predicate: DayDirective }], viewQueries: [{ propertyName: "columns", predicate: ["column"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"calendarWrap\">\n  <div class=\"headerCalendar\"></div>\n  <div class=\"dateSelector\">\n    <div (click)=\"goPrev()\" class=\"nextPrevBtn\" style=\"left: 0\">{{ '<' }}</div>\n    <div class=\"wrapMonths\" [ngStyle]=\"{ width: width + 'px' }\">\n      <div class=\"months\" *ngIf=\"getViewSelectorMode() === 'days'\">\n        <app-month-view\n          *ngFor=\"let date of getCalendar()\"\n          #column\n          [date]=\"date\"\n          [dayDirectives]=\"getMonthDayDirectives(date)\"\n        >\n        </app-month-view>\n      </div>\n\n      <div *ngIf=\"getViewSelectorMode() === 'months'\" style=\"width: 100%; display: flex; flex: 1\">\n        <app-month-select *ngFor=\"let date of getCalendar()\" #column [date]=\"date\"> </app-month-select>\n      </div>\n    </div>\n    <div (click)=\"goNext()\" class=\"nextPrevBtn\" style=\"right: 0\">{{ '>' }}</div>\n  </div>\n</div>\n", styles: ["app-calendar{display:block;float:left;width:100%}.nextPrevBtn{display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;cursor:pointer;padding:8px 16px;transition:all .2s;font-size:.9em;color:#26b1b1;z-index:1;background:#fff}.nextPrevBtn:hover{background:#eee}app-week-view{width:100%;display:flex;flex-direction:row}.dayWeekTitle{flex:1;color:#a9a9a9;justify-content:center;align-items:center;display:flex;font-size:.8em;padding:4px}.styledDay.isWeekEnd{color:#c53c3c}.weekWrap{display:flex;flex-direction:column}app-month-select{display:flex;float:left;min-width:200px;-webkit-animation:appear .2s ease-in-out;animation:appear .2s ease-in-out}.monthItem{width:33%;font-size:.8em;text-align:center;padding:9px 0;box-shadow:0 0 0 1px #f4f3f3;color:#313131}.monthItem:hover{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background:#eee;transition:.2s}app-month-view{display:flex;float:left;min-width:200px;-webkit-animation:appear .2s ease-in-out;animation:appear .2s ease-in-out;height:100%}@-webkit-keyframes appear{0%{transform:scale(.6);opacity:.6}50%{transform:opacity(0);transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes appear{0%{transform:scale(.6);opacity:.6}50%{transform:opacity(0);transform:scale(.8)}to{opacity:1;transform:scale(1)}}.months{display:flex;flex-direction:row;position:relative;overflow:hidden;height:100%}.wrapMonths{display:block;float:left;overflow:hidden;width:477px}.monthOne{position:relative}.monthOne.right{-webkit-animation:right .2s ease-in-out;animation:right .2s ease-in-out}.monthOne.left{-webkit-animation:left .2s ease-in-out;animation:left .2s ease-in-out}@-webkit-keyframes left{0%{transform:translate(-100%)}to{transform:translate(0)}}@keyframes left{0%{transform:translate(-100%)}to{transform:translate(0)}}@-webkit-keyframes right{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes right{0%{transform:translate(0)}to{transform:translate(-100%)}}.monthSelectBtn{display:flex;flex-direction:row;flex:1;padding:4px 8px}app-day-view{display:block;float:left;width:100%}.styledDay.isDisabled{color:#a7a7a7}.styledDay.isInPeriod{background:#26b1b12b!important}.styledDay.isSelected{background:#26b1b180!important}.styledDay.isSelected.period.end{background:linear-gradient(120deg,#26b1b12b 45%,#26b1b180 113%)!important;-webkit-animation:appear .2s ease-in-out;animation:appear .2s ease-in-out}.styledDay.isSelected.period.start{background:linear-gradient(-50deg,#26b1b12b 45%,#26b1b180 113%)!important;-webkit-animation:appear .2s ease-in-out;animation:appear .2s ease-in-out}.day{display:flex;flex:1;font-size:.8em;padding:6px}.dayDir{display:block;float:left;width:100%;height:100%}.styledDay{display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;color:#313131;transition:all .2s}.styledDay:hover{background:#eee;cursor:pointer;color:#313131;-webkit-user-select:none;-moz-user-select:none;user-select:none}.dayWrap{display:flex;flex:1;height:100%;width:100%}.calendarWrap{float:left;display:flex;background:#fff;flex-direction:column;border-radius:4px;transition:all .2s;width:-webkit-min-content;width:-moz-min-content;width:min-content}.dateSelector{float:left;width:auto;display:flex;position:relative;flex-direction:row;transition:all .2s}.monthWrap{padding:0 8px;display:block;float:left;width:100%}.f1{display:flex;flex:1}.monthHeader{text-align:center;padding:8px 16px;font-size:15px;color:#2b2b2b}.monthHeader:first-letter{text-transform:uppercase}.monthHeader:hover{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background:#eee}\n"], components: [{ type: MonthViewComponent, selector: "app-month-view", inputs: ["date", "updateDate", "dayDirectives"], outputs: ["elWidth"] }, { type: MonthSelectComponent, selector: "app-month-select", inputs: ["date"] }], directives: [{ type: i4.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CustomDatepickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-custom-datepicker', providers: [CalendarService], encapsulation: ViewEncapsulation.None, template: "<div class=\"calendarWrap\">\n  <div class=\"headerCalendar\"></div>\n  <div class=\"dateSelector\">\n    <div (click)=\"goPrev()\" class=\"nextPrevBtn\" style=\"left: 0\">{{ '<' }}</div>\n    <div class=\"wrapMonths\" [ngStyle]=\"{ width: width + 'px' }\">\n      <div class=\"months\" *ngIf=\"getViewSelectorMode() === 'days'\">\n        <app-month-view\n          *ngFor=\"let date of getCalendar()\"\n          #column\n          [date]=\"date\"\n          [dayDirectives]=\"getMonthDayDirectives(date)\"\n        >\n        </app-month-view>\n      </div>\n\n      <div *ngIf=\"getViewSelectorMode() === 'months'\" style=\"width: 100%; display: flex; flex: 1\">\n        <app-month-select *ngFor=\"let date of getCalendar()\" #column [date]=\"date\"> </app-month-select>\n      </div>\n    </div>\n    <div (click)=\"goNext()\" class=\"nextPrevBtn\" style=\"right: 0\">{{ '>' }}</div>\n  </div>\n</div>\n", styles: ["app-calendar{display:block;float:left;width:100%}.nextPrevBtn{display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;cursor:pointer;padding:8px 16px;transition:all .2s;font-size:.9em;color:#26b1b1;z-index:1;background:#fff}.nextPrevBtn:hover{background:#eee}app-week-view{width:100%;display:flex;flex-direction:row}.dayWeekTitle{flex:1;color:#a9a9a9;justify-content:center;align-items:center;display:flex;font-size:.8em;padding:4px}.styledDay.isWeekEnd{color:#c53c3c}.weekWrap{display:flex;flex-direction:column}app-month-select{display:flex;float:left;min-width:200px;-webkit-animation:appear .2s ease-in-out;animation:appear .2s ease-in-out}.monthItem{width:33%;font-size:.8em;text-align:center;padding:9px 0;box-shadow:0 0 0 1px #f4f3f3;color:#313131}.monthItem:hover{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background:#eee;transition:.2s}app-month-view{display:flex;float:left;min-width:200px;-webkit-animation:appear .2s ease-in-out;animation:appear .2s ease-in-out;height:100%}@-webkit-keyframes appear{0%{transform:scale(.6);opacity:.6}50%{transform:opacity(0);transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes appear{0%{transform:scale(.6);opacity:.6}50%{transform:opacity(0);transform:scale(.8)}to{opacity:1;transform:scale(1)}}.months{display:flex;flex-direction:row;position:relative;overflow:hidden;height:100%}.wrapMonths{display:block;float:left;overflow:hidden;width:477px}.monthOne{position:relative}.monthOne.right{-webkit-animation:right .2s ease-in-out;animation:right .2s ease-in-out}.monthOne.left{-webkit-animation:left .2s ease-in-out;animation:left .2s ease-in-out}@-webkit-keyframes left{0%{transform:translate(-100%)}to{transform:translate(0)}}@keyframes left{0%{transform:translate(-100%)}to{transform:translate(0)}}@-webkit-keyframes right{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes right{0%{transform:translate(0)}to{transform:translate(-100%)}}.monthSelectBtn{display:flex;flex-direction:row;flex:1;padding:4px 8px}app-day-view{display:block;float:left;width:100%}.styledDay.isDisabled{color:#a7a7a7}.styledDay.isInPeriod{background:#26b1b12b!important}.styledDay.isSelected{background:#26b1b180!important}.styledDay.isSelected.period.end{background:linear-gradient(120deg,#26b1b12b 45%,#26b1b180 113%)!important;-webkit-animation:appear .2s ease-in-out;animation:appear .2s ease-in-out}.styledDay.isSelected.period.start{background:linear-gradient(-50deg,#26b1b12b 45%,#26b1b180 113%)!important;-webkit-animation:appear .2s ease-in-out;animation:appear .2s ease-in-out}.day{display:flex;flex:1;font-size:.8em;padding:6px}.dayDir{display:block;float:left;width:100%;height:100%}.styledDay{display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;color:#313131;transition:all .2s}.styledDay:hover{background:#eee;cursor:pointer;color:#313131;-webkit-user-select:none;-moz-user-select:none;user-select:none}.dayWrap{display:flex;flex:1;height:100%;width:100%}.calendarWrap{float:left;display:flex;background:#fff;flex-direction:column;border-radius:4px;transition:all .2s;width:-webkit-min-content;width:-moz-min-content;width:min-content}.dateSelector{float:left;width:auto;display:flex;position:relative;flex-direction:row;transition:all .2s}.monthWrap{padding:0 8px;display:block;float:left;width:100%}.f1{display:flex;flex:1}.monthHeader{text-align:center;padding:8px 16px;font-size:15px;color:#2b2b2b}.monthHeader:first-letter{text-transform:uppercase}.monthHeader:hover{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background:#eee}\n"] }]
        }], ctorParameters: function () { return [{ type: CalendarService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { selectedDates: [{
                type: Input
            }], selectedDatesChange: [{
                type: Output
            }], onDayClick: [{
                type: Output
            }], days: [{
                type: Input
            }], shownDate: [{
                type: Input
            }], viewMode: [{
                type: Input
            }], weekStart: [{
                type: Input
            }], weekends: [{
                type: Input
            }], selectMode: [{
                type: Input
            }], disabledDates: [{
                type: Input
            }], columns: [{
                type: ViewChildren,
                args: ['column']
            }], dayDirectivesQueryList: [{
                type: ContentChildren,
                args: [DayDirective]
            }] } });

class YearSelectComponent {
    constructor() { }
    ngOnInit() { }
}
/** @nocollapse */ YearSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: YearSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ YearSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: YearSelectComponent, selector: "app-year-select", ngImport: i0, template: "<p>year-select works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: YearSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-year-select', template: "<p>year-select works!</p>\n", styles: [""] }]
        }], ctorParameters: function () { return []; } });

class CustomDatepickerModule {
    static forRoot() {
        return {
            ngModule: CustomDatepickerModule
        };
    }
}
/** @nocollapse */ CustomDatepickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CustomDatepickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ CustomDatepickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CustomDatepickerModule, declarations: [CustomDatepickerComponent,
        MonthViewComponent,
        DayViewComponent,
        MonthSelectComponent,
        YearSelectComponent,
        WeekViewComponent,
        DayDirective], imports: [CommonModule], exports: [CustomDatepickerComponent, DayDirective] });
/** @nocollapse */ CustomDatepickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CustomDatepickerModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CustomDatepickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CustomDatepickerComponent,
                        MonthViewComponent,
                        DayViewComponent,
                        MonthSelectComponent,
                        YearSelectComponent,
                        WeekViewComponent,
                        DayDirective
                    ],
                    imports: [CommonModule],
                    exports: [CustomDatepickerComponent, DayDirective]
                }]
        }] });

/*
 * Public API Surface of ngx-custom-datepicker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CustomDatepickerComponent, CustomDatepickerModule, DayDirective, SelectMode, ViewMode };
//# sourceMappingURL=ngx-custom-datepicker.mjs.map
