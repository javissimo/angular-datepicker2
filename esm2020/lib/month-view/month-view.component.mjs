import { Component, Input, HostBinding, Output, ViewChild } from '@angular/core';
import { MonthService } from '../_service/month.service';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../_service/month.service";
import * as i2 from "../_service/calendar.service";
import * as i3 from "../week-view/week-view.component";
import * as i4 from "@angular/common";
export class MonthViewComponent {
    constructor(monthService, calendarService) {
        this.monthService = monthService;
        this.calendarService = calendarService;
        this.subscription = new Subscription();
    }
    showYears() {
        this.calendarService.getShownYears(this.date);
    }
    ngOnInit() {
        this.subscription.add(this.calendarService.animationStep.subscribe((data) => {
            this.animationStep = data;
        }));
        this.weeks = this.monthService.getMonth(this.date);
        const weekDays = [];
        for (let i = 0; i < 7; i++) {
            weekDays.push(this.weeks[0].adjustDate(i));
        }
        this.weekDays = weekDays;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getWeekDayDirectives(weekStartDate) {
        weekStartDate.setHours(0, 0, 0, 0);
        const weekEndDate = new Date(weekStartDate);
        weekEndDate.setDate(weekStartDate.getDate() + 7);
        weekEndDate.setHours(0, 0, 0, 0);
        const directives = this.dayDirectives.filter((directive) => directive.date.getTime() >= weekStartDate.getTime() && directive.date.getTime() < weekEndDate.getTime());
        return directives;
    }
}
/** @nocollapse */ MonthViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthViewComponent, deps: [{ token: i1.MonthService }, { token: i2.CalendarService }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ MonthViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: MonthViewComponent, selector: "app-month-view", inputs: { date: "date", updateDate: "updateDate", dayDirectives: "dayDirectives" }, outputs: { elWidth: "elWidth" }, host: { properties: { "style": "this.elWidth" } }, providers: [MonthService], viewQueries: [{ propertyName: "elementView", first: true, predicate: ["wrap"], descendants: true, static: true }], ngImport: i0, template: "<div #wrap class=\"monthWrap monthOne {{ animationStep }}\">\n  <div class=\"monthHeader\" (click)=\"showYears()\">\n    {{ date | date: 'LLLL yyyy' }}\n  </div>\n  <div class=\"weekWrap\" style=\"flexdirection: 'row'\">\n    <div style=\"display: flex; flexdirection: 'row'\">\n      <div *ngFor=\"let d of weekDays\" class=\"dayWeekTitle\">{{ d | date: 'EEEEE' }}</div>\n    </div>\n    <app-week-view\n      *ngFor=\"let weekStartDate of weeks\"\n      [date]=\"weekStartDate\"\n      [dayDirectives]=\"getWeekDayDirectives(weekStartDate)\"\n      [firstMonthDate]=\"date\"\n      style=\"flexdirection: 'row'\"\n    >\n    </app-week-view>\n  </div>\n</div>\n", components: [{ type: i3.WeekViewComponent, selector: "app-week-view", inputs: ["date", "firstMonthDate", "dayDirectives"] }], directives: [{ type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "date": i4.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-month-view', providers: [MonthService], template: "<div #wrap class=\"monthWrap monthOne {{ animationStep }}\">\n  <div class=\"monthHeader\" (click)=\"showYears()\">\n    {{ date | date: 'LLLL yyyy' }}\n  </div>\n  <div class=\"weekWrap\" style=\"flexdirection: 'row'\">\n    <div style=\"display: flex; flexdirection: 'row'\">\n      <div *ngFor=\"let d of weekDays\" class=\"dayWeekTitle\">{{ d | date: 'EEEEE' }}</div>\n    </div>\n    <app-week-view\n      *ngFor=\"let weekStartDate of weeks\"\n      [date]=\"weekStartDate\"\n      [dayDirectives]=\"getWeekDayDirectives(weekStartDate)\"\n      [firstMonthDate]=\"date\"\n      style=\"flexdirection: 'row'\"\n    >\n    </app-week-view>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MonthService }, { type: i2.CalendarService }]; }, propDecorators: { date: [{
                type: Input
            }], updateDate: [{
                type: Input
            }], dayDirectives: [{
                type: Input
            }], elWidth: [{
                type: Output
            }, {
                type: HostBinding,
                args: ['style']
            }], elementView: [{
                type: ViewChild,
                args: ['wrap', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY3VzdG9tLWRhdGVwaWNrZXIvc3JjL2xpYi9tb250aC12aWV3L21vbnRoLXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWN1c3RvbS1kYXRlcGlja2VyL3NyYy9saWIvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUVoSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBUXBDLE1BQU0sT0FBTyxrQkFBa0I7SUFhN0IsWUFBb0IsWUFBMEIsRUFBVSxlQUFnQztRQUFwRSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUZ4RixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFeUQsQ0FBQztJQUU1RixTQUFTO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuRCxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELG9CQUFvQixDQUFDLGFBQW1CO1FBQ3RDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FDMUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUNaLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUMxRyxDQUFDO1FBQ0YsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7a0lBaERVLGtCQUFrQjtzSEFBbEIsa0JBQWtCLGlOQUZsQixDQUFDLFlBQVksQ0FBQyw2SUNUM0IseXBCQWtCQTsyRkRQYSxrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0UsZ0JBQWdCLGFBRWYsQ0FBQyxZQUFZLENBQUM7aUlBR2hCLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBRTBCLE9BQU87c0JBQXRDLE1BQU07O3NCQUFJLFdBQVc7dUJBQUMsT0FBTztnQkFDTyxXQUFXO3NCQUEvQyxTQUFTO3VCQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZS9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IE1vbnRoU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlL21vbnRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYXlEaXJlY3RpdmUgfSBmcm9tICcuLi9kYXkuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vbnRoLXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9udGgtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW01vbnRoU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBkYXRlOiBEYXRlO1xuICBASW5wdXQoKSB1cGRhdGVEYXRlOiBhbnk7XG4gIEBJbnB1dCgpIGRheURpcmVjdGl2ZXM6IERheURpcmVjdGl2ZVtdO1xuXG4gIEBPdXRwdXQoKSBASG9zdEJpbmRpbmcoJ3N0eWxlJykgZWxXaWR0aDogbnVtYmVyO1xuICBAVmlld0NoaWxkKCd3cmFwJywgeyBzdGF0aWM6IHRydWUgfSkgZWxlbWVudFZpZXc6IEVsZW1lbnRSZWY7XG5cbiAgd2Vla3M6IERhdGVbXSB8IG51bGxbXTtcbiAgYW5pbWF0aW9uU3RlcDogc3RyaW5nO1xuICB3ZWVrRGF5czogRGF0ZVtdO1xuICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb250aFNlcnZpY2U6IE1vbnRoU2VydmljZSwgcHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSkge31cblxuICBzaG93WWVhcnMoKTogdm9pZCB7XG4gICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0U2hvd25ZZWFycyh0aGlzLmRhdGUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuYW5pbWF0aW9uU3RlcC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGVwID0gZGF0YTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLndlZWtzID0gdGhpcy5tb250aFNlcnZpY2UuZ2V0TW9udGgodGhpcy5kYXRlKTtcblxuICAgIGNvbnN0IHdlZWtEYXlzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIHdlZWtEYXlzLnB1c2godGhpcy53ZWVrc1swXS5hZGp1c3REYXRlKGkpKTtcbiAgICB9XG4gICAgdGhpcy53ZWVrRGF5cyA9IHdlZWtEYXlzO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGdldFdlZWtEYXlEaXJlY3RpdmVzKHdlZWtTdGFydERhdGU6IERhdGUpOiBEYXlEaXJlY3RpdmVbXSB7XG4gICAgd2Vla1N0YXJ0RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBjb25zdCB3ZWVrRW5kRGF0ZSA9IG5ldyBEYXRlKHdlZWtTdGFydERhdGUpO1xuICAgIHdlZWtFbmREYXRlLnNldERhdGUod2Vla1N0YXJ0RGF0ZS5nZXREYXRlKCkgKyA3KTtcbiAgICB3ZWVrRW5kRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBjb25zdCBkaXJlY3RpdmVzID0gdGhpcy5kYXlEaXJlY3RpdmVzLmZpbHRlcihcbiAgICAgIChkaXJlY3RpdmUpID0+XG4gICAgICAgIGRpcmVjdGl2ZS5kYXRlLmdldFRpbWUoKSA+PSB3ZWVrU3RhcnREYXRlLmdldFRpbWUoKSAmJiBkaXJlY3RpdmUuZGF0ZS5nZXRUaW1lKCkgPCB3ZWVrRW5kRGF0ZS5nZXRUaW1lKClcbiAgICApO1xuICAgIHJldHVybiBkaXJlY3RpdmVzO1xuICB9XG59XG4iLCI8ZGl2ICN3cmFwIGNsYXNzPVwibW9udGhXcmFwIG1vbnRoT25lIHt7IGFuaW1hdGlvblN0ZXAgfX1cIj5cbiAgPGRpdiBjbGFzcz1cIm1vbnRoSGVhZGVyXCIgKGNsaWNrKT1cInNob3dZZWFycygpXCI+XG4gICAge3sgZGF0ZSB8IGRhdGU6ICdMTExMIHl5eXknIH19XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid2Vla1dyYXBcIiBzdHlsZT1cImZsZXhkaXJlY3Rpb246ICdyb3cnXCI+XG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXhkaXJlY3Rpb246ICdyb3cnXCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBkIG9mIHdlZWtEYXlzXCIgY2xhc3M9XCJkYXlXZWVrVGl0bGVcIj57eyBkIHwgZGF0ZTogJ0VFRUVFJyB9fTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxhcHAtd2Vlay12aWV3XG4gICAgICAqbmdGb3I9XCJsZXQgd2Vla1N0YXJ0RGF0ZSBvZiB3ZWVrc1wiXG4gICAgICBbZGF0ZV09XCJ3ZWVrU3RhcnREYXRlXCJcbiAgICAgIFtkYXlEaXJlY3RpdmVzXT1cImdldFdlZWtEYXlEaXJlY3RpdmVzKHdlZWtTdGFydERhdGUpXCJcbiAgICAgIFtmaXJzdE1vbnRoRGF0ZV09XCJkYXRlXCJcbiAgICAgIHN0eWxlPVwiZmxleGRpcmVjdGlvbjogJ3JvdydcIlxuICAgID5cbiAgICA8L2FwcC13ZWVrLXZpZXc+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=