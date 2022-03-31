import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class DayDirective {
    constructor(template, container) {
        this.template = template;
        this.container = container;
        this.context = null;
        this.__created = false;
    }
    set day(date) {
        this.context = {
            $implicit: date
        };
    }
    ngOnInit() {
        this.context = {
            $implicit: this.date,
            date: this.date
        };
    }
}
/** @nocollapse */ DayDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DayDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ DayDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.0", type: DayDirective, selector: "[ad2day]", inputs: { date: ["ad2dayFrom", "date"], day: "day" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DayDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ad2day]'
                    //providers: [TemplateRef],
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }]; }, propDecorators: { date: [{
                type: Input,
                args: ['ad2dayFrom']
            }], day: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jdXN0b20tZGF0ZXBpY2tlci9zcmMvbGliL2RheS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDOztBQU1oRixNQUFNLE9BQU8sWUFBWTtJQUl2QixZQUFvQixRQUEwQixFQUFVLFNBQTJCO1FBQS9ELGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFIbkYsWUFBTyxHQUFlLElBQUksQ0FBQztRQUMzQixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBRW9FLENBQUM7SUFJdkYsSUFBYSxHQUFHLENBQUMsSUFBVTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7OzRIQW5CVSxZQUFZO2dIQUFaLFlBQVk7MkZBQVosWUFBWTtrQkFKeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsMkJBQTJCO2lCQUM1QjtpSUFPc0IsSUFBSTtzQkFBeEIsS0FBSzt1QkFBQyxZQUFZO2dCQUVOLEdBQUc7c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdDb250YWluZXJSZWYsIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thZDJkYXldJ1xuICAvL3Byb3ZpZGVyczogW1RlbXBsYXRlUmVmXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF5RGlyZWN0aXZlIHtcbiAgY29udGV4dDogYW55IHwgbnVsbCA9IG51bGw7XG4gIF9fY3JlYXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIEBJbnB1dCgnYWQyZGF5RnJvbScpIGRhdGU6IERhdGU7XG5cbiAgQElucHV0KCkgc2V0IGRheShkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy5jb250ZXh0ID0ge1xuICAgICAgJGltcGxpY2l0OiBkYXRlXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29udGV4dCA9IHtcbiAgICAgICRpbXBsaWNpdDogdGhpcy5kYXRlLFxuICAgICAgZGF0ZTogdGhpcy5kYXRlXG4gICAgfTtcbiAgfVxufVxuIl19