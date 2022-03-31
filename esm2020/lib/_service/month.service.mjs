import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./calendar.service";
export class MonthService {
    constructor(calendarService) {
        this.calendarService = calendarService;
    }
    getMonth(date) {
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const weekStart = this.calendarService.weekStart;
        const countWeek = Math.ceil((daysInMonth + date.getFirstDateDay(weekStart)) / 7);
        const weeks = [];
        for (let i = 0; i < countWeek; i++) {
            const startWeekDate = new Date(date);
            startWeekDate.setDate(date.getDate() + i * 7 - date.getDayWithStart(weekStart));
            weeks.push(startWeekDate);
        }
        return weeks;
    }
}
/** @nocollapse */ MonthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthService, deps: [{ token: i1.CalendarService }], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ MonthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: MonthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.CalendarService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jdXN0b20tZGF0ZXBpY2tlci9zcmMvbGliL19zZXJ2aWNlL21vbnRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFeEQsUUFBUSxDQUFDLElBQVU7UUFDakIsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbkYsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFFakQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFakYsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsTUFBTSxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDaEYsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzQjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7NEhBbkJVLFlBQVk7Z0lBQVosWUFBWSxjQUZYLE1BQU07MkZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuL2NhbGVuZGFyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNb250aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbGVuZGFyU2VydmljZTogQ2FsZW5kYXJTZXJ2aWNlKSB7fVxuXG4gIGdldE1vbnRoKGRhdGU6IERhdGUpOiBhbnlbXSB7XG4gICAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKTtcblxuICAgIGNvbnN0IHdlZWtTdGFydCA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLndlZWtTdGFydDtcblxuICAgIGNvbnN0IGNvdW50V2VlayA9IE1hdGguY2VpbCgoZGF5c0luTW9udGggKyBkYXRlLmdldEZpcnN0RGF0ZURheSh3ZWVrU3RhcnQpKSAvIDcpO1xuXG4gICAgY29uc3Qgd2Vla3MgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRXZWVrOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0YXJ0V2Vla0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgIHN0YXJ0V2Vla0RhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGkgKiA3IC0gZGF0ZS5nZXREYXlXaXRoU3RhcnQod2Vla1N0YXJ0KSk7XG4gICAgICB3ZWVrcy5wdXNoKHN0YXJ0V2Vla0RhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB3ZWVrcztcbiAgfVxufVxuIl19