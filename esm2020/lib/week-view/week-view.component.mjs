import { Component, Input } from '@angular/core';
import { WeekService } from '../_service/week.service';
import * as i0 from "@angular/core";
import * as i1 from "../_service/week.service";
import * as i2 from "../day-view/day-view.component";
import * as i3 from "@angular/common";
export class WeekViewComponent {
    constructor(weekService) {
        this.weekService = weekService;
    }
    ngOnInit() {
        this.dates = this.weekService.getWeek(this.date);
    }
    getDayDirective(date) {
        const day = this.dayDirectives.find((directive) => directive.date.getTime() === date.getTime());
        return day;
    }
}
/** @nocollapse */ WeekViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: WeekViewComponent, deps: [{ token: i1.WeekService }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ WeekViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: WeekViewComponent, selector: "app-week-view", inputs: { date: "date", firstMonthDate: "firstMonthDate", dayDirectives: "dayDirectives" }, providers: [WeekService], ngImport: i0, template: "<div *ngFor=\"let date of dates\" class=\"f1\">\n  <app-day-view\n    [dayDirective]=\"getDayDirective(date)\"\n    [date]=\"date\"\n    [thisMonth]=\"date.getMonth() === firstMonthDate.getMonth() && date.getFullYear() === firstMonthDate.getFullYear()\"\n  >\n  </app-day-view>\n</div>\n", styles: [""], components: [{ type: i2.DayViewComponent, selector: "app-day-view", inputs: ["date", "thisMonth", "dayDirective"] }], directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: WeekViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-week-view', providers: [WeekService], template: "<div *ngFor=\"let date of dates\" class=\"f1\">\n  <app-day-view\n    [dayDirective]=\"getDayDirective(date)\"\n    [date]=\"date\"\n    [thisMonth]=\"date.getMonth() === firstMonthDate.getMonth() && date.getFullYear() === firstMonthDate.getFullYear()\"\n  >\n  </app-day-view>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.WeekService }]; }, propDecorators: { date: [{
                type: Input
            }], firstMonthDate: [{
                type: Input
            }], dayDirectives: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jdXN0b20tZGF0ZXBpY2tlci9zcmMvbGliL3dlZWstdmlldy93ZWVrLXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWN1c3RvbS1kYXRlcGlja2VyL3NyYy9saWIvd2Vlay12aWV3L3dlZWstdmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBUXZELE1BQU0sT0FBTyxpQkFBaUI7SUFLNUIsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBRWhELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVU7UUFDeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUF1QixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzlHLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7aUlBZFUsaUJBQWlCO3FIQUFqQixpQkFBaUIsb0lBRmpCLENBQUMsV0FBVyxDQUFDLDBCQ1IxQixpU0FRQTsyRkRFYSxpQkFBaUI7a0JBTjdCLFNBQVM7K0JBQ0UsZUFBZSxhQUdkLENBQUMsV0FBVyxDQUFDO2tHQUdmLElBQUk7c0JBQVosS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERheURpcmVjdGl2ZSB9IGZyb20gJy4uL2RheS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgV2Vla1NlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZS93ZWVrLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtd2Vlay12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dlZWstdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dlZWstdmlldy5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtXZWVrU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgV2Vla1ZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRlOiBEYXRlO1xuICBASW5wdXQoKSBmaXJzdE1vbnRoRGF0ZTogRGF0ZTtcbiAgQElucHV0KCkgZGF5RGlyZWN0aXZlczogRGF5RGlyZWN0aXZlW107XG4gIGRhdGVzOiBEYXRlW10gfCBudWxsW107XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2Vla1NlcnZpY2U6IFdlZWtTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0ZXMgPSB0aGlzLndlZWtTZXJ2aWNlLmdldFdlZWsodGhpcy5kYXRlKTtcbiAgfVxuXG4gIGdldERheURpcmVjdGl2ZShkYXRlOiBEYXRlKTogRGF5RGlyZWN0aXZlIHtcbiAgICBjb25zdCBkYXkgPSB0aGlzLmRheURpcmVjdGl2ZXMuZmluZCgoZGlyZWN0aXZlOiBEYXlEaXJlY3RpdmUpID0+IGRpcmVjdGl2ZS5kYXRlLmdldFRpbWUoKSA9PT0gZGF0ZS5nZXRUaW1lKCkpO1xuICAgIHJldHVybiBkYXk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nRm9yPVwibGV0IGRhdGUgb2YgZGF0ZXNcIiBjbGFzcz1cImYxXCI+XG4gIDxhcHAtZGF5LXZpZXdcbiAgICBbZGF5RGlyZWN0aXZlXT1cImdldERheURpcmVjdGl2ZShkYXRlKVwiXG4gICAgW2RhdGVdPVwiZGF0ZVwiXG4gICAgW3RoaXNNb250aF09XCJkYXRlLmdldE1vbnRoKCkgPT09IGZpcnN0TW9udGhEYXRlLmdldE1vbnRoKCkgJiYgZGF0ZS5nZXRGdWxsWWVhcigpID09PSBmaXJzdE1vbnRoRGF0ZS5nZXRGdWxsWWVhcigpXCJcbiAgPlxuICA8L2FwcC1kYXktdmlldz5cbjwvZGl2PlxuIl19