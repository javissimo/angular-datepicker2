import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  AfterViewInit
} from '@angular/core';
import { CalendarService } from '../_service/calendar.service';
import { DayService } from '../_service/day.service';
import { Subscription } from 'rxjs';
import { DayDirective } from '../day.directive';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  providers: [DayService]
})
export class DayViewComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() date = new Date();
  @Input() thisMonth = true;
  @Input() dayDirective: DayDirective = {} as DayDirective;
  @ViewChild('tpl', { static: false, read: ViewContainerRef })
  template: ViewContainerRef = {} as ViewContainerRef;
  subscriptions: Subscription[] = [];

  constructor(public dayService: DayService, private calendarService: CalendarService) {}

  createChildComponent(): void {
    const viewContainerRef = this.template;
    viewContainerRef.clear();
    viewContainerRef.createEmbeddedView((this.dayDirective as any).template, (this.dayDirective as any).context);
  }

  isStartOrEndDatePeriod(): false | 'start' | 'end' {
    if (this.getSelectMode() === 'period' && this.getSelectedDates().length == 2) {
      if (this.date.getYmd() === this.getSelectedDates()[0].getYmd()) return 'start';

      if (this.date.getYmd() === this.getSelectedDates()[1].getYmd()) return 'end';
    }
    return false;
  }

  getSelectedDates(): Date[] {
    return this.calendarService.selectedDates.value;
  }

  getSelectMode(): string {
    return this.calendarService.selectMode;
  }

  ngAfterViewInit(): void {
    if (this.dayDirective && this.template) {
      this.createChildComponent();
    }
  }

  // bad idea, too mach subscribes for every day
  ngOnInit(): void {
    this.dayService.createDay(this.date);
    this.subscriptions.push(
      this.calendarService.selectedDates.subscribe((data: Date[]): void => {
        const days = data.map((item) => item.getYmd());
        this.dayService.day.isSelected = days.includes(this.dayService.day.date.getYmd());
        this.dayService.day.isInPeriod = this.dayService.getIsInPeriod(this.dayService.day.date);
      })
    );
  }

  ngOnChanges(): void {
    if (this.dayDirective && this.template) {
      this.createChildComponent();
    }
  }

  onClick(): void {
    this.dayService.toggleDate();
  }

  isValidDate(): boolean {
    const actualDate = this.dayService.day.date;
    const minDate = new Date(
      new Date(this.calendarService.minDate).setDate(new Date(this.calendarService.minDate).getDate() - 1)
    );
    if (this.calendarService.minDate && actualDate < minDate) return true;
    if (this.calendarService.maxDate && actualDate > this.calendarService.maxDate) return true;
    return false;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
