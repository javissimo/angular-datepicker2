# Angular Datepicker 2

v3.x.x

![Node.js CI](https://github.com/nsnayp13/ngx-custom-datepicker/workflows/Node.js%20CI/badge.svg)

`npm i ngx-custom-datepicker`

now @angular/core: ^8.2.14

## DEMO

[https://javier.pm/ngx-custom-datepicker/](https://javier.pm/ngx-custom-datepicker/)

## Getting started

Set to imports app.module.ts `import { AngularDatepicker2Module } from 'ngx-custom-datepicker'`. Then you can use it by tag `<ngx-custom-datepicker></ngx-custom-datepicker>`.

## Options

Props of `AngularDatepicker2`:

```javascript

// Array of selected dates.
[(selectedDates)]: Date[]

// Array custom definitions of days. Subscribable. See Day interface
[days]: Day[]

// Date whould be render for default calendar .
shownDate: Date

// Alignment of days in a week. Default horizontal.
vertical: boolean

// Start week day, default 0
weekStart: number

// Weekends, default [0,6], set Day.isWeekend true
weekends: number[] = [0, 6]

// Single, Multiple, Period. Import from public-api or interfaces. Its enum
selectMode: SelectMode

// Callback event when click on day
// its returns a Day object before change self state by click
(dayClick): Day

// Callback event when selectedDatesChange changed
// its returns a Date[]
(selectedDatesChange): Date[]
```

## i18n

set `registerLocaleData(locale, "locale")` in your `app.module.ts`. See [https://angular.io/api/common/registerLocaleData](https://angular.io/api/common/registerLocaleData)

## Example

```javascript
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
>
</ngx-custom-datepicker>
```
