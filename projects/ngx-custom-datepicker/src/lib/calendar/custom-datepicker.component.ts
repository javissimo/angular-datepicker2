import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ViewChildren,
  EventEmitter,
  Output,
  ViewEncapsulation,
  AfterViewInit,
  ContentChildren,
  QueryList,
  SimpleChanges,
  SimpleChange
} from '@angular/core';
import { CalendarService } from '../_service/calendar.service';
import { Day, SelectMode } from '../interfaces';
import { DayDirective } from '../day.directive';

@Component({
  selector: 'ngx-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.scss'],
  providers: [CalendarService],
  encapsulation: ViewEncapsulation.None
})
export class CustomDatepickerComponent implements OnInit, OnChanges, AfterViewInit {
  /**
   * @description
   *  Array of selected dates.
   * */
  @Input() selectedDates: Date[] = [];
  @Output() selectedDatesChange = new EventEmitter<Date[]>();

  /**
   * @description
   *  Callback event when click on day
   */
  @Output() dayClick = new EventEmitter<Day>();

  /**
   * @description
   *  Array custom definitions of days. Subscribable
   * @see `Day`
   * */
  @Input() days: Day[] = [];

  /**
   * @description
   *  Date would be render for default calendar .
   * */
  @Input() shownDate: Date = new Date();

  /**
   * @description
   * Start week day, default 0
   */
  @Input() weekStart = 0;

  /**
   * @description
   * Weekends, default [0,6], set Day.isWeekend true
   */
  @Input() weekends: number[] = [0, 6];

  /**
   * @description
   * Single, Multiple, Period
   * @See `SelectMode`
   */
  @Input() selectMode = SelectMode.Single;
  @Input() minDate: Date;
  @Input() maxDate: Date;

  @ViewChildren('column') columns: any;

  @ContentChildren(DayDirective)
  dayDirectivesQueryList: QueryList<DayDirective> = {} as QueryList<DayDirective>;
  dayDirectives: DayDirective[] = [];

  constructor(private calendarService: CalendarService) {}

  private __getDirectives(): void {
    if (this.dayDirectivesQueryList) {
      this.dayDirectives = this.dayDirectivesQueryList.toArray();
      this.dayDirectivesQueryList.changes.subscribe((data) => {
        this.dayDirectives = data.toArray();
      });
    }
  }

  ngAfterViewInit(): void {
    this.__getDirectives();
  }

  getMonthDayDirectives(date: Date): DayDirective[] {
    return this.dayDirectives.filter(
      (directive: DayDirective) =>
        directive.date.getMonth() === date.getMonth() && directive.date.getFullYear() === date.getFullYear()
    );
  }

  ngOnInit(): void {
    if (!this.shownDate) {
      this.shownDate = new Date();
    }

    this.calendarService.selectedDates.subscribe((dates): void => {
      this.selectedDatesChange.emit(dates);
    });

    this.calendarService.clickDayKey.subscribe((data) => {
      if (data) {
        this.dayClick.emit(data.day);
      }
    });

    this.calendarService.days.next(this.days);
    this.calendarService.weekStart = this.weekStart;
    this.calendarService.weekends = this.weekends;
    this.calendarService.viewSelectorMode = 'days';

    this.calendarService.selectMode = this.selectMode;
    this.calendarService.shownDate = this.shownDate;
    this.calendarService.setSelectedDates(this.selectedDates);
    this.calendarService.setDays(this.days);
    this.calendarService.getShownMonths(this.shownDate);

    if (this.minDate) {
      const minDate = this.minDate;
      minDate.setDate(minDate.getDate() - 1);
      this.calendarService.minDate = minDate;
    }
    this.calendarService.maxDate = this.maxDate;
  }

  getCalendar(): Date[] {
    return this.calendarService.calendar;
  }

  getViewSelectorMode(): string {
    return this.calendarService.viewSelectorMode;
  }

  calculate(): Date[] {
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

  isEqual(array: any[], array1: string | any[]): boolean {
    const a = array.filter((item: any) => array1.includes(item));
    return a.length === 0 && array.length === array1.length;
  }

  private _selectMode(selectMode: SimpleChange): void {
    if (selectMode.currentValue !== selectMode.previousValue) {
      this.calendarService.selectMode = selectMode.currentValue;
      this.calendarService.getShownMonths(this.shownDate);
    }
  }

  private _shownDate(shownDate: SimpleChange): void {
    if (shownDate.currentValue !== shownDate.previousValue) {
      this.calendarService.shownDate = shownDate.currentValue;
      this.calendarService.getShownMonths(this.shownDate);
    }
  }

  ngOnChanges(simpleChange: SimpleChanges): void {
    simpleChange.selectMode && this._selectMode(simpleChange.selectMode);
    simpleChange.shownDate && this._shownDate(simpleChange.shownDate);
    simpleChange.days && this.calendarService.days.next(this.days);
    simpleChange.selectedDates && this.calendarService.setSelectedDates(this.selectedDates);
  }
}
