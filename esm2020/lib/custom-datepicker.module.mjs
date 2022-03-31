import { NgModule } from '@angular/core';
import { CustomDatepickerComponent } from './calendar/custom-datepicker.component';
import { MonthViewComponent } from './month-view/month-view.component';
import { DayViewComponent } from './day-view/day-view.component';
import { MonthSelectComponent } from './month-select/month-select.component';
import { YearSelectComponent } from './year-select/year-select.component';
import { WeekViewComponent } from './week-view/week-view.component';
import { CommonModule } from '@angular/common';
import { DayDirective } from './day.directive';
import * as i0 from "@angular/core";
export class CustomDatepickerModule {
    static forRoot() {
        return {
            ngModule: CustomDatepickerModule
        };
    }
}
/** @nocollapse */ CustomDatepickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CustomDatepickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ CustomDatepickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CustomDatepickerModule, declarations: [CustomDatepickerComponent,
        MonthViewComponent,
        DayViewComponent,
        MonthSelectComponent,
        YearSelectComponent,
        WeekViewComponent,
        DayDirective], imports: [CommonModule], exports: [CustomDatepickerComponent, DayDirective] });
/** @nocollapse */ CustomDatepickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CustomDatepickerModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CustomDatepickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CustomDatepickerComponent,
                        MonthViewComponent,
                        DayViewComponent,
                        MonthSelectComponent,
                        YearSelectComponent,
                        WeekViewComponent,
                        DayDirective
                    ],
                    imports: [CommonModule],
                    exports: [CustomDatepickerComponent, DayDirective]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWRhdGVwaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWN1c3RvbS1kYXRlcGlja2VyL3NyYy9saWIvY3VzdG9tLWRhdGVwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBZS9DLE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHNCQUFzQjtTQUNqQyxDQUFDO0lBQ0osQ0FBQzs7c0lBTFUsc0JBQXNCO3VJQUF0QixzQkFBc0IsaUJBWC9CLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLFlBQVksYUFFSixZQUFZLGFBQ1oseUJBQXlCLEVBQUUsWUFBWTt1SUFFdEMsc0JBQXNCLFlBSHhCLENBQUMsWUFBWSxDQUFDOzJGQUdaLHNCQUFzQjtrQkFibEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oseUJBQXlCO3dCQUN6QixrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGlCQUFpQjt3QkFDakIsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixFQUFFLFlBQVksQ0FBQztpQkFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tRGF0ZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvY3VzdG9tLWRhdGVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbnRoVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXlWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9kYXktdmlldy9kYXktdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9udGhTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXNlbGVjdC9tb250aC1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFllYXJTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3llYXItc2VsZWN0L3llYXItc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWVrVmlld0NvbXBvbmVudCB9IGZyb20gJy4vd2Vlay12aWV3L3dlZWstdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERheURpcmVjdGl2ZSB9IGZyb20gJy4vZGF5LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEN1c3RvbURhdGVwaWNrZXJDb21wb25lbnQsXG4gICAgTW9udGhWaWV3Q29tcG9uZW50LFxuICAgIERheVZpZXdDb21wb25lbnQsXG4gICAgTW9udGhTZWxlY3RDb21wb25lbnQsXG4gICAgWWVhclNlbGVjdENvbXBvbmVudCxcbiAgICBXZWVrVmlld0NvbXBvbmVudCxcbiAgICBEYXlEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtDdXN0b21EYXRlcGlja2VyQ29tcG9uZW50LCBEYXlEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbURhdGVwaWNrZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEN1c3RvbURhdGVwaWNrZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEN1c3RvbURhdGVwaWNrZXJNb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=