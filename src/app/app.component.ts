import { Component, OnInit } from '@angular/core';
import { Calendar, Day, SelectMode } from 'projects/ngx-custom-datepicker/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-custom-datepicker';
  date: Date;
  selectedDates: Date[];
  singleDate: Date[] = [];
  minDate: Date;
  maxDate: Date;

  lol: Calendar;
  days: Day[];

  dates: Date[] = [];

  selectMode: SelectMode = SelectMode.Period;

  _stackOnDayClick = [];

  _selectModeVal = [SelectMode.Period, SelectMode.Multiple, SelectMode.Single];

  _verticalVal = [false, true];

  _shownDateVal = [new Date()];

  _selectMode(event: { target: { value: any } }): void {
    this.selectMode = event.target.value;
  }

  dayClick(day: any): void {
    this._stackOnDayClick.push({ ...day });
  }

  ngOnInit(): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    this.selectedDates = [];

    this.date = new Date(new Date().getFullYear(), new Date().getMonth(), 7);

    this.days = [
      {
        isHovered: false,
        isInPeriod: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 2)
      },
      {
        isHovered: false,
        isSelected: false,
        isInPeriod: false,
        isWeekEnd: true,
        date: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 30)
      },
      {
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        isInPeriod: false,
        date: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 5)
      },
      {
        isInPeriod: false,
        isHovered: false,
        isSelected: false,
        isWeekEnd: true,
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 6)
      }
    ];
  }
}
