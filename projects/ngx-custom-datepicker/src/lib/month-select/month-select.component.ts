import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CalendarService } from '../_service/calendar.service';

@Component({
  selector: 'app-month-select',
  templateUrl: './month-select.component.html'
})
export class MonthSelectComponent implements OnInit {
  constructor(private calendarService: CalendarService) {}

  goNext(): void {
    this.calendarService.goNext(this.calendarService.calendar[this.calendarService.calendar.length - 1]);
  }
  goPrev(): void {
    this.calendarService.goPrev(this.calendarService.calendar[0]);
  }

  @Input() date = new Date();
  @ViewChild('wrap', { static: true }) elementView: ElementRef = {} as ElementRef;
  months: Date[] = [];
  animationStep = 'stop';

  ngOnInit(): void {
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

  isValidMonth(month: Date): boolean {
    const minMonth = new Date(
      new Date(this.calendarService.minDate).setMonth(new Date(this.calendarService.minDate).getMonth() - 1)
    );
    if (this.calendarService.minDate && month < minMonth) return true;
    if (this.calendarService.maxDate && month > this.calendarService.maxDate) return true;
    return false;
  }

  setMonth(month: Date): void {
    this.calendarService.getShownMonths(month);
  }
}
