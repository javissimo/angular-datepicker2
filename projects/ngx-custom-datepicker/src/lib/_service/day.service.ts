import { Injectable } from '@angular/core';
import { CalendarService } from './calendar.service';
import { Day } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  day = {} as Day;
  constructor(private calendarService: CalendarService) {}

  createDay(date: Date): Day {
    this.day = {
      isWeekEnd: this.calendarService.weekends.includes(date.getDay()),
      isSelected: false,
      isHovered: false,
      isInPeriod: this.getIsInPeriod(date),
      date: date
    };

    return this.day;
  }

  getIsInPeriod(date: Date): boolean {
    if (
      this.calendarService.selectMode === 'period' &&
      this.calendarService.selectedDates.value.length == 2 &&
      date.getTime() >= this.calendarService.selectedDates.value[0].getTime() &&
      date.getTime() <= this.calendarService.selectedDates.value[1].getTime()
    ) {
      return true;
    }
    return false;
  }

  getDay(): Day {
    return this.day;
  }

  sortByDate(a: { getTime: () => number }, b: { getTime: () => number }): 0 | 1 | -1 {
    if (a.getTime() > b.getTime()) return 1;
    if (a.getTime() < b.getTime()) return -1;
    else return 0;
  }

  toggleDate(): void {
    this.calendarService.clickDayKey.next({
      key: new Date().getYmd() + '' + Math.random(),
      day: this.day
    });

    if (this.calendarService.selectMode === 'single') {
      this.calendarService.selectedDates.next([this.day.date]);
    } else if (this.calendarService.selectMode === 'multiple') {
      if (this.day.isSelected) {
        const selectedDates = this.calendarService.selectedDates.value.filter(
          (elem) => elem.getYmd() !== this.day.date.getYmd()
        );
        selectedDates.sort(this.sortByDate);
        this.calendarService.selectedDates.next(selectedDates);
      } else {
        const selectedDates = this.calendarService.selectedDates.value;
        selectedDates.push(this.day.date);
        this.calendarService.selectedDates.next(selectedDates);
      }
    } else if (this.calendarService.selectMode === 'period') {
      if (this.day.isSelected) {
        const selectedDates = this.calendarService.selectedDates.value.filter(
          (elem) => elem.getYmd() !== this.day.date.getYmd()
        );
        this.calendarService.selectedDates.next(selectedDates);
      } else {
        if (this.calendarService.selectedDates.value.length == 2) {
          this.calendarService.selectedDates.next([this.day.date]);
        } else if (this.calendarService.selectedDates.value.length < 2) {
          const selectedDates = this.calendarService.selectedDates.value;
          selectedDates.push(this.day.date);

          selectedDates.sort(this.sortByDate);

          this.calendarService.selectedDates.next(selectedDates);
        }
      }
    }
  }
}
