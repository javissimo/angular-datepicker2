export interface Day {
  isWeekEnd: boolean;
  isSelected: boolean;
  isHovered: boolean;
  isInPeriod: boolean;
  date: Date;
}

export interface Week {
  id: number;
  days: Day[] | null;
}

export interface Month {
  id: number;
  date: Date;
  weeks: Week[] | null;
}

export interface Calendar {
  id?: number;
  months?: Month[] | null;
}

/**
 * @publicApi
 */
export enum SelectMode {
  Single = 'single',
  Multiple = 'multiple',
  Period = 'period'
}
