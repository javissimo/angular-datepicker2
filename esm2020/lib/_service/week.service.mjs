import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class WeekService {
    getWeek(date) {
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
/** @nocollapse */ WeekService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: WeekService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ WeekService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: WeekService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: WeekService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWN1c3RvbS1kYXRlcGlja2VyL3NyYy9saWIvX3NlcnZpY2Uvd2Vlay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLE9BQU8sQ0FBQyxJQUFVO1FBQ2hCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNwQixNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFFaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzsySEFaVSxXQUFXOytIQUFYLFdBQVcsY0FGVixNQUFNOzJGQUVQLFdBQVc7a0JBSHZCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBXZWVrU2VydmljZSB7XG4gIGdldFdlZWsoZGF0ZTogRGF0ZSk6IERhdGVbXSB7XG4gICAgY29uc3QgZGF5SW5XZWVrID0gNztcbiAgICBjb25zdCBkYXlzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRheUluV2VlazsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICBjdXJEYXRlLnNldERhdGUoY3VyRGF0ZS5nZXREYXRlKCkgKyBpKTtcbiAgICAgIGRheXMucHVzaChjdXJEYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5cztcbiAgfVxufVxuIl19