import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeekService {
  getWeek(date: Date): Date[] {
    const dayInWeek = 7;
    const days = [];

    for (let i = 0; i < dayInWeek; i++) {
      const curDate = new Date(date);
      curDate.setDate(curDate.getDate() + i);
      days.push(curDate);
    }

    return days;
  }
}
