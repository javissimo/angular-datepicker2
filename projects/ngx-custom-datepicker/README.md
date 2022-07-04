# ngx-custom-datepicker

Fork of [Angular Datepicker 2](https://github.com/nsnayp13/angular-datepicker2)

Live demo [here](https://javier.pm/ngx-custom-datepicker)

## Options

Props of `ngx-custom-datepicker`:

```javascript

// Array of selected dates.
[(selectedDates)]: Date[]

// Array custom definitions of days. Subscribable. See Day interface
[days]: Day[]

// Date whould be render for default calendar .
shownDate: Date

// Start week day, default 0
weekStart: number

// Weekends, default [0,6], set Day.isWeekend true
weekends: number[] = [0, 6]

// Single, Multiple, Period. Import from public-api or interfaces. Its enum
selectMode: SelectMode

// Callback event when click on day
// its returns a Day object before change self state by click
(dayClick):Day

// Callback event when selectedDatesChange changed
// its returns a Date[]
(selectedDatesChange):Date[]

//Minimum Date, everything before will be disabled
minDate: Date

//Maximum Date, everything after it will be disabled
maxDate: Date
```

## i18n

set `registerLocaleData(locale, "locale")` in your `app.module.ts`. See [https://angular.io/api/common/registerLocaleData](https://angular.io/api/common/registerLocaleData)

## Example

```javascript
this.selectedDates = [new Date(2020, 3, 7), new Date(2020, 3, 9)];

this.shownDate = new Date(2020, 3, 7);


this.days = [
  {
    isHovered: false,
    isSelected: false,
    isWeekEnd: true,
    date: new Date(2020, 3, 21)
  },
  {
    isHovered: false,
    isSelected: false,
    isWeekEnd: true,
    date: new Date(2020, 3, 26)
  }
];
```

```html
<ngx-custom-datepicker
  [shownDate]="shownDate"
  [days]="days"
  [(selectedDates)]="selectedDates"
  [selectMode]="'period'"
  [weekends]="[0,1]"
  [weekStart]="1"
  [minDate]="minDate"
  [maxDate]="maxDate"
>
</ngx-custom-datepicker>
```
