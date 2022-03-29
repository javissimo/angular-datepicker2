import { NgModule } from '@angular/core';
import { CustomDatePicker } from './calendar/angular-datepicker2.component';
import { MonthViewComponent } from './month-view/month-view.component';
import { DayViewComponent } from './day-view/day-view.component';
import { MonthSelectComponent } from './month-select/month-select.component';
import { YearSelectComponent } from './year-select/year-select.component';
import { WeekViewComponent } from './week-view/week-view.component';
import { CommonModule } from '@angular/common';
import { DayDirective } from './day.directive';

@NgModule({
  declarations: [
    CustomDatePicker,
    MonthViewComponent,
    DayViewComponent,
    MonthSelectComponent,
    YearSelectComponent,
    WeekViewComponent,
    DayDirective
  ],
  imports: [CommonModule],
  exports: [CustomDatePicker, DayDirective]
})
export class AngularDatepicker2Module {}
