import { Component, OnInit, Input } from '@angular/core';
import { DayDirective } from '../day.directive';
import { WeekService } from '../_service/week.service';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss'],
  providers: [WeekService]
})
export class WeekViewComponent implements OnInit {
  @Input() date = new Date();
  @Input() firstMonthDate = new Date();
  @Input() dayDirectives: DayDirective[] = [];
  dayDirective: DayDirective = {} as DayDirective;
  dates: Date[] = [];

  constructor(private weekService: WeekService) {}

  ngOnInit(): void {
    this.dates = this.weekService.getWeek(this.date);
  }

  getDayDirective(date: Date): DayDirective {
    return this.dayDirectives.filter((directive: DayDirective) => directive.date.getTime() === date.getTime())[0];
  }
}
