import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Day } from '../interfaces';

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

Date.prototype.adjustDate = function (num = 0): Date {
  const date = new Date(this);
  date.setDate(date.getDate() + num);
  return date;
};

/** Adjust & setDate = 1 */
Date.prototype.adjustMonth = function (num = 0): Date {
  this.setDate(1);
  this.setMonth(this.getMonth() + num);
  return this;
};

/** Adjust & setDate = 1 */
Date.prototype.adjustYear = function (num = 0): Date {
  this.setDate(1);
  this.setMonth(0);
  this.setFullYear(this.getFullYear() + num);
  return this;
};

Date.prototype.getDayWithStart = function (start: number): number {
  const date = new Date(this.getTime());
  let day = date.getDay();

  day = day - start;

  if (day < 0) {
    day = 7 + day;
  }
  return day;
};

Date.prototype.getFirstDateDay = function (start: any): number {
  const date = new Date(this.getTime());
  date.setDate(1);
  return date.getDayWithStart(start);
};

Date.prototype.getYmd = function (): string {
  return (
    this.getFullYear().toString() +
    String(this.getMonth().toString()).padStart(2, '0') +
    String(this.getDate().toString()).padStart(2, '0')
  );
};

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  calendar: Date[] = [];
  shownDate = new Date();
  viewSelectorMode = 'days';
  selectMode = 'single';

  selectedDates: BehaviorSubject<Date[]> = new BehaviorSubject([] as Date[]);
  days: BehaviorSubject<Day[]> = new BehaviorSubject([] as Day[]);

  countMonths = 0;
  weekStart = 0;
  weekends: number[] = [];

  minDate: Date = new Date();
  maxDate: Date = new Date();

  animationStep = new BehaviorSubject('stop');

  recountWidth = new BehaviorSubject(1);

  /** Needs for onClickDay detect change */
  clickDayKey: BehaviorSubject<{
    day: Day;
    key: string;
  }> = new BehaviorSubject({ day: {} as Day, key: '' });

  updateDate = new BehaviorSubject(new Date());

  setSelectedDates(selectedDates: Date[]): void {
    this.selectedDates.next(selectedDates);
  }

  setDays(days: Day[]): void {
    this.days.next(days);
  }

  setShownDate(date: Date): void {
    this.shownDate = date;
  }

  addSelected(date: Date): void {
    this.selectedDates.value.push(date);
    this.selectedDates.next(this.selectedDates.value);
  }

  public getCountMonths = (): number => 1;

  public getLastDate(date?: Date): Date {
    const lastDate = this.shownDate
      ? new Date(this.shownDate)
      : this.selectedDates.value
      ? new Date(this.selectedDates.value[this.selectedDates.value.length - 1])
      : new Date();

    return date ? new Date(date) : lastDate;
  }

  getShownYears(lastDateShown: Date): void {
    let countMonths = 0;
    const months = [];

    countMonths = this.getCountMonths();
    this.countMonths = countMonths;

    for (let i = countMonths - 1; i >= 0; i--) {
      months.push(new Date(lastDateShown).adjustYear(-i));
    }
    this.calendar = months;
    this.viewSelectorMode = 'months';
    this.animationStep.next('stop');
  }

  getShownMonths(date?: Date): void {
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
    this.animationStep.next('stop');
  }

  goPrev(firstDate: Date): void {
    const prevDate = new Date(firstDate);

    if (this.viewSelectorMode === 'days') {
      prevDate.adjustMonth(-1);
    } else if (this.viewSelectorMode === 'months') {
      prevDate.adjustYear(-1);
    }

    let dates = [...this.calendar];
    dates.unshift(prevDate);
    this.calendar = dates;
    this.animationStep.next('left');

    dates = [...this.calendar];
    dates.splice(dates.length - 1, 1);
    this.calendar = dates;
  }

  goNext(lastDate: Date): void {
    const nextDate = new Date(lastDate);

    if (this.viewSelectorMode === 'days') {
      nextDate.adjustMonth(1);
    } else if (this.viewSelectorMode === 'months') {
      nextDate.adjustYear(1);
    }

    let dates = [...this.calendar];
    dates.push(nextDate);
    this.calendar = dates;
    this.animationStep.next('right');

    dates = [...this.calendar];

    dates.splice(0, 1);
    this.calendar = dates;
  }
}
