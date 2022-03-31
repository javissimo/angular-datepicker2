import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DayService } from '../_service/day.service';
import * as i0 from "@angular/core";
import * as i1 from "../_service/day.service";
import * as i2 from "../_service/calendar.service";
import * as i3 from "@angular/common";
export class DayViewComponent {
    constructor(dayService, calendarService) {
        this.dayService = dayService;
        this.calendarService = calendarService;
    }
    createChildComponent() {
        const viewContainerRef = this.template;
        viewContainerRef.clear();
        viewContainerRef.createEmbeddedView(this.dayDirective.template, this.dayDirective.context);
    }
    isStartOrEndDatePeriod() {
        if (this.getSelectMode() === 'period' && this.getSelectedDates().length == 2) {
            if (this.date.getYmd() === this.getSelectedDates()[0].getYmd())
                return 'start';
            if (this.date.getYmd() === this.getSelectedDates()[1].getYmd())
                return 'end';
        }
        return false;
    }
    getSelectedDates() {
        return this.calendarService.selectedDates.value;
    }
    getSelectMode() {
        return this.calendarService.selectMode;
    }
    ngAfterViewInit() {
        if (this.dayDirective && this.template) {
            this.createChildComponent();
        }
    }
    // bad idea, too mach subscribes for every day
    ngOnInit() {
        this.dayService.createDay(this.date);
        this.sub = this.calendarService.selectedDates.subscribe((data) => {
            const days = data.map((item) => item.getYmd());
            this.dayService.day.isSelected = days.includes(this.dayService.day.date.getYmd());
            this.dayService.day.isInPeriod = this.dayService.getIsInPeriod(this.dayService.day.date);
        });
    }
    ngOnChanges() {
        if (this.dayDirective && this.template) {
            this.createChildComponent();
        }
    }
    onClick() {
        !this.dayService.day.isDisabled ? this.dayService.toggleDate() : null;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
/** @nocollapse */ DayViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DayViewComponent, deps: [{ token: i1.DayService }, { token: i2.CalendarService }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ DayViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: DayViewComponent, selector: "app-day-view", inputs: { date: "date", thisMonth: "thisMonth", dayDirective: "dayDirective" }, providers: [DayService], viewQueries: [{ propertyName: "template", first: true, predicate: ["tpl"], descendants: true, read: ViewContainerRef }], usesOnChanges: true, ngImport: i0, template: "<div class=\"dayWrap\">\n  <div\n    class=\"styledDay\"\n    *ngIf=\"thisMonth\"\n    (click)=\"onClick()\"\n    [ngClass]=\"{\n      isDisabled: dayService.day.isDisabled,\n      isSelected: dayService.day.isSelected,\n      isWeekEnd: dayService.day.isWeekEnd,\n      isInPeriod: dayService.day.isInPeriod,\n      period: getSelectMode() === 'period',\n      end: isStartOrEndDatePeriod() === 'end',\n      start: isStartOrEndDatePeriod() === 'start'\n    }\"\n  >\n    <span *ngIf=\"!dayDirective\" class=\"day\">\n      {{ dayService.day.date | date: 'd' }}\n    </span>\n    <div class=\"dayDir\">\n      <ng-template #tpl></ng-template>\n    </div>\n  </div>\n</div>\n", directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "date": i3.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DayViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-day-view', providers: [DayService], template: "<div class=\"dayWrap\">\n  <div\n    class=\"styledDay\"\n    *ngIf=\"thisMonth\"\n    (click)=\"onClick()\"\n    [ngClass]=\"{\n      isDisabled: dayService.day.isDisabled,\n      isSelected: dayService.day.isSelected,\n      isWeekEnd: dayService.day.isWeekEnd,\n      isInPeriod: dayService.day.isInPeriod,\n      period: getSelectMode() === 'period',\n      end: isStartOrEndDatePeriod() === 'end',\n      start: isStartOrEndDatePeriod() === 'start'\n    }\"\n  >\n    <span *ngIf=\"!dayDirective\" class=\"day\">\n      {{ dayService.day.date | date: 'd' }}\n    </span>\n    <div class=\"dayDir\">\n      <ng-template #tpl></ng-template>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.DayService }, { type: i2.CalendarService }]; }, propDecorators: { date: [{
                type: Input
            }], thisMonth: [{
                type: Input
            }], dayDirective: [{
                type: Input
            }], template: [{
                type: ViewChild,
                args: ['tpl', { static: false, read: ViewContainerRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWN1c3RvbS1kYXRlcGlja2VyL3NyYy9saWIvZGF5LXZpZXcvZGF5LXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWN1c3RvbS1kYXRlcGlja2VyL3NyYy9saWIvZGF5LXZpZXcvZGF5LXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBU3JELE1BQU0sT0FBTyxnQkFBZ0I7SUFTM0IsWUFBbUIsVUFBc0IsRUFBVSxlQUFnQztRQUFoRSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQztJQUV2RixvQkFBb0I7UUFDbEIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLGdCQUFnQixDQUFDLGtCQUFrQixDQUFFLElBQUksQ0FBQyxZQUFvQixDQUFDLFFBQVEsRUFBRyxJQUFJLENBQUMsWUFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvRyxDQUFDO0lBRUQsc0JBQXNCO1FBQ3BCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzVFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsT0FBTyxPQUFPLENBQUM7WUFFL0UsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFBRSxPQUFPLEtBQUssQ0FBQztTQUM5RTtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2xELENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELDhDQUE4QztJQUM5QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDL0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxPQUFPO1FBQ0wsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RSxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0lBN0RVLGdCQUFnQjtvSEFBaEIsZ0JBQWdCLHVIQUZoQixDQUFDLFVBQVUsQ0FBQyxzR0FNa0IsZ0JBQWdCLGtEQ2YzRCxxcUJBdUJBOzJGRFphLGdCQUFnQjtrQkFMNUIsU0FBUzsrQkFDRSxjQUFjLGFBRWIsQ0FBQyxVQUFVLENBQUM7K0hBR2QsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFFTixRQUFRO3NCQURQLFNBQVM7dUJBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF5U2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlL2RheS5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGF5RGlyZWN0aXZlIH0gZnJvbSAnLi4vZGF5LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kYXktdmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXktdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW0RheVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIERheVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZGF0ZTogRGF0ZTtcbiAgQElucHV0KCkgdGhpc01vbnRoOiBib29sZWFuO1xuICBASW5wdXQoKSBkYXlEaXJlY3RpdmU6IERheURpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZCgndHBsJywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIHRlbXBsYXRlOiBWaWV3Q29udGFpbmVyUmVmO1xuICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgc3ViMTogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXlTZXJ2aWNlOiBEYXlTZXJ2aWNlLCBwcml2YXRlIGNhbGVuZGFyU2VydmljZTogQ2FsZW5kYXJTZXJ2aWNlKSB7fVxuXG4gIGNyZWF0ZUNoaWxkQ29tcG9uZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLnRlbXBsYXRlO1xuICAgIHZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldygodGhpcy5kYXlEaXJlY3RpdmUgYXMgYW55KS50ZW1wbGF0ZSwgKHRoaXMuZGF5RGlyZWN0aXZlIGFzIGFueSkuY29udGV4dCk7XG4gIH1cblxuICBpc1N0YXJ0T3JFbmREYXRlUGVyaW9kKCkge1xuICAgIGlmICh0aGlzLmdldFNlbGVjdE1vZGUoKSA9PT0gJ3BlcmlvZCcgJiYgdGhpcy5nZXRTZWxlY3RlZERhdGVzKCkubGVuZ3RoID09IDIpIHtcbiAgICAgIGlmICh0aGlzLmRhdGUuZ2V0WW1kKCkgPT09IHRoaXMuZ2V0U2VsZWN0ZWREYXRlcygpWzBdLmdldFltZCgpKSByZXR1cm4gJ3N0YXJ0JztcblxuICAgICAgaWYgKHRoaXMuZGF0ZS5nZXRZbWQoKSA9PT0gdGhpcy5nZXRTZWxlY3RlZERhdGVzKClbMV0uZ2V0WW1kKCkpIHJldHVybiAnZW5kJztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWREYXRlcygpOiBEYXRlW10ge1xuICAgIHJldHVybiB0aGlzLmNhbGVuZGFyU2VydmljZS5zZWxlY3RlZERhdGVzLnZhbHVlO1xuICB9XG5cbiAgZ2V0U2VsZWN0TW9kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNhbGVuZGFyU2VydmljZS5zZWxlY3RNb2RlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRheURpcmVjdGl2ZSAmJiB0aGlzLnRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmNyZWF0ZUNoaWxkQ29tcG9uZW50KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gYmFkIGlkZWEsIHRvbyBtYWNoIHN1YnNjcmliZXMgZm9yIGV2ZXJ5IGRheVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRheVNlcnZpY2UuY3JlYXRlRGF5KHRoaXMuZGF0ZSk7XG4gICAgdGhpcy5zdWIgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5zZWxlY3RlZERhdGVzLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgZGF5cyA9IGRhdGEubWFwKChpdGVtKSA9PiBpdGVtLmdldFltZCgpKTtcbiAgICAgIHRoaXMuZGF5U2VydmljZS5kYXkuaXNTZWxlY3RlZCA9IGRheXMuaW5jbHVkZXModGhpcy5kYXlTZXJ2aWNlLmRheS5kYXRlLmdldFltZCgpKTtcbiAgICAgIHRoaXMuZGF5U2VydmljZS5kYXkuaXNJblBlcmlvZCA9IHRoaXMuZGF5U2VydmljZS5nZXRJc0luUGVyaW9kKHRoaXMuZGF5U2VydmljZS5kYXkuZGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXlEaXJlY3RpdmUgJiYgdGhpcy50ZW1wbGF0ZSkge1xuICAgICAgdGhpcy5jcmVhdGVDaGlsZENvbXBvbmVudCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgIXRoaXMuZGF5U2VydmljZS5kYXkuaXNEaXNhYmxlZCA/IHRoaXMuZGF5U2VydmljZS50b2dnbGVEYXRlKCkgOiBudWxsO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJkYXlXcmFwXCI+XG4gIDxkaXZcbiAgICBjbGFzcz1cInN0eWxlZERheVwiXG4gICAgKm5nSWY9XCJ0aGlzTW9udGhcIlxuICAgIChjbGljayk9XCJvbkNsaWNrKClcIlxuICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgIGlzRGlzYWJsZWQ6IGRheVNlcnZpY2UuZGF5LmlzRGlzYWJsZWQsXG4gICAgICBpc1NlbGVjdGVkOiBkYXlTZXJ2aWNlLmRheS5pc1NlbGVjdGVkLFxuICAgICAgaXNXZWVrRW5kOiBkYXlTZXJ2aWNlLmRheS5pc1dlZWtFbmQsXG4gICAgICBpc0luUGVyaW9kOiBkYXlTZXJ2aWNlLmRheS5pc0luUGVyaW9kLFxuICAgICAgcGVyaW9kOiBnZXRTZWxlY3RNb2RlKCkgPT09ICdwZXJpb2QnLFxuICAgICAgZW5kOiBpc1N0YXJ0T3JFbmREYXRlUGVyaW9kKCkgPT09ICdlbmQnLFxuICAgICAgc3RhcnQ6IGlzU3RhcnRPckVuZERhdGVQZXJpb2QoKSA9PT0gJ3N0YXJ0J1xuICAgIH1cIlxuICA+XG4gICAgPHNwYW4gKm5nSWY9XCIhZGF5RGlyZWN0aXZlXCIgY2xhc3M9XCJkYXlcIj5cbiAgICAgIHt7IGRheVNlcnZpY2UuZGF5LmRhdGUgfCBkYXRlOiAnZCcgfX1cbiAgICA8L3NwYW4+XG4gICAgPGRpdiBjbGFzcz1cImRheURpclwiPlxuICAgICAgPG5nLXRlbXBsYXRlICN0cGw+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==