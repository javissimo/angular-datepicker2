import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CalendarService } from '../_service/calendar.service';
import { MonthService } from '../_service/month.service';
import { Subscription } from 'rxjs';
import { DayDirective } from '../day.directive';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  providers: [MonthService]
})
export class MonthViewComponent implements OnInit, OnDestroy {
  @Input() date = new Date();
  @Input() updateDate: any;
  @Input() dayDirectives: DayDirective[] = [];

  @ViewChild('wrap', { static: true }) elementView = {} as ElementRef;

  weeks: Date[] = [];
  animationStep = '';
  weekDays: Date[] = [];
  subscriptions: Subscription[] = [];

  constructor(private monthService: MonthService, private calendarService: CalendarService) {}

  goNext(): void {
    this.calendarService.goNext(this.calendarService.calendar[this.calendarService.calendar.length - 1]);
  }
  goPrev(): void {
    this.calendarService.goPrev(this.calendarService.calendar[0]);
  }

  showYears(): void {
    this.calendarService.getShownYears(this.date);
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.calendarService.animationStep.subscribe((animationStep): void => {
        this.animationStep = animationStep;
      })
    );
    this.weeks = this.monthService.getMonth(this.date);

    const weekDays: Date[] = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(this.weeks[0].adjustDate(i));
    }
    this.weekDays = weekDays;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  getWeekDayDirectives(weekStartDate: Date): DayDirective[] {
    weekStartDate.setHours(0, 0, 0, 0);
    const weekEndDate = new Date(weekStartDate);
    weekEndDate.setDate(weekStartDate.getDate() + 7);
    weekEndDate.setHours(0, 0, 0, 0);
    const directives = this.dayDirectives.filter(
      (directive) =>
        directive.date.getTime() >= weekStartDate.getTime() && directive.date.getTime() < weekEndDate.getTime()
    );
    return directives;
  }
}
