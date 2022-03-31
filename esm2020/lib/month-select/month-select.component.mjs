import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../_service/calendar.service";
import * as i2 from "@angular/common";
export class MonthSelectComponent {
    constructor(calendarService) {
        this.calendarService = calendarService;
        this.months = [];
    }
    ngOnInit() {
        for (let i = 0; i < 12; i++) {
            const date = new Date(this.date);
            date.setMonth(0);
            date.adjustMonth(i);
            this.months.push(date);
        }
        this.calendarService.animationStep.subscribe((data) => {
            this.animationStep = data;
        });
    }
    setMonth(month) {
        this.calendarService.getShownMonths(month);
    }
}
/** @nocollapse */ MonthSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthSelectComponent, deps: [{ token: i1.CalendarService }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ MonthSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: MonthSelectComponent, selector: "app-month-select", inputs: { date: "date" }, viewQueries: [{ propertyName: "elementView", first: true, predicate: ["wrap"], descendants: true, static: true }], ngImport: i0, template: "<div\n  #wrap\n  style=\"display: flex; flex-direction: column; flex: 1; width: 100%\"\n  class=\"monthWrap monthOne {{ animationStep }}\"\n>\n  <div class=\"monthHeader\">\n    {{ date | date: 'yyyy' }}\n  </div>\n  <div style=\"display: flex; flex-direction: row; flex: 1; flex-wrap: wrap\">\n    <ng-container *ngFor=\"let month of months; let i = index\">\n      <div class=\"monthItem\" (click)=\"setMonth(month)\">\n        {{ month | date: 'LLL' }}\n      </div>\n      <div *ngIf=\"(i + 1) % 3 === 0 && i != 0 && i != 11\" style=\"width: 100%; height: 1px\"></div>\n    </ng-container>\n  </div>\n</div>\n", directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "date": i2.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-month-select', template: "<div\n  #wrap\n  style=\"display: flex; flex-direction: column; flex: 1; width: 100%\"\n  class=\"monthWrap monthOne {{ animationStep }}\"\n>\n  <div class=\"monthHeader\">\n    {{ date | date: 'yyyy' }}\n  </div>\n  <div style=\"display: flex; flex-direction: row; flex: 1; flex-wrap: wrap\">\n    <ng-container *ngFor=\"let month of months; let i = index\">\n      <div class=\"monthItem\" (click)=\"setMonth(month)\">\n        {{ month | date: 'LLL' }}\n      </div>\n      <div *ngIf=\"(i + 1) % 3 === 0 && i != 0 && i != 11\" style=\"width: 100%; height: 1px\"></div>\n    </ng-container>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.CalendarService }]; }, propDecorators: { date: [{
                type: Input
            }], elementView: [{
                type: ViewChild,
                args: ['wrap', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jdXN0b20tZGF0ZXBpY2tlci9zcmMvbGliL21vbnRoLXNlbGVjdC9tb250aC1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWN1c3RvbS1kYXRlcGlja2VyL3NyYy9saWIvbW9udGgtc2VsZWN0L21vbnRoLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7Ozs7QUFPaEYsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFJcEQsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQUoyQyxDQUFDO0lBT3hELFFBQVE7UUFDTixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBVztRQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDOztvSUF2QlUsb0JBQW9CO3dIQUFwQixvQkFBb0IscU1DUGpDLHVtQkFpQkE7MkZEVmEsb0JBQW9CO2tCQUpoQyxTQUFTOytCQUNFLGtCQUFrQjtzR0FNbkIsSUFBSTtzQkFBWixLQUFLO2dCQUMrQixXQUFXO3NCQUEvQyxTQUFTO3VCQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2UvY2FsZW5kYXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb250aC1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9udGgtc2VsZWN0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNb250aFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2UpIHt9XG5cbiAgQElucHV0KCkgZGF0ZTogRGF0ZTtcbiAgQFZpZXdDaGlsZCgnd3JhcCcsIHsgc3RhdGljOiB0cnVlIH0pIGVsZW1lbnRWaWV3OiBFbGVtZW50UmVmO1xuICBtb250aHMgPSBbXTtcbiAgYW5pbWF0aW9uU3RlcDogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZSk7XG4gICAgICBkYXRlLnNldE1vbnRoKDApO1xuICAgICAgZGF0ZS5hZGp1c3RNb250aChpKTtcbiAgICAgIHRoaXMubW9udGhzLnB1c2goZGF0ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuYW5pbWF0aW9uU3RlcC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcCA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBzZXRNb250aChtb250aDogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldFNob3duTW9udGhzKG1vbnRoKTtcbiAgfVxufVxuIiwiPGRpdlxuICAjd3JhcFxuICBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGZsZXg6IDE7IHdpZHRoOiAxMDAlXCJcbiAgY2xhc3M9XCJtb250aFdyYXAgbW9udGhPbmUge3sgYW5pbWF0aW9uU3RlcCB9fVwiXG4+XG4gIDxkaXYgY2xhc3M9XCJtb250aEhlYWRlclwiPlxuICAgIHt7IGRhdGUgfCBkYXRlOiAneXl5eScgfX1cbiAgPC9kaXY+XG4gIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBmbGV4OiAxOyBmbGV4LXdyYXA6IHdyYXBcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtb250aCBvZiBtb250aHM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb250aEl0ZW1cIiAoY2xpY2spPVwic2V0TW9udGgobW9udGgpXCI+XG4gICAgICAgIHt7IG1vbnRoIHwgZGF0ZTogJ0xMTCcgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cIihpICsgMSkgJSAzID09PSAwICYmIGkgIT0gMCAmJiBpICE9IDExXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxcHhcIj48L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==