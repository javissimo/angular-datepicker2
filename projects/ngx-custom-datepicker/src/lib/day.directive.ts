import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ad2day]'
})
export class DayDirective implements OnInit {
  context: any = null;
  __created = false;

  @Input() date = new Date();

  @Input() set day(date: Date) {
    this.context = {
      $implicit: date
    };
  }

  ngOnInit(): void {
    this.context = {
      $implicit: this.date,
      date: this.date
    };
  }
}
