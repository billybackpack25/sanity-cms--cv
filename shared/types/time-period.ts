export type TimePeriod = {
  startYear: number;
  startMonth: string;
  isCurrent: true;
} |
{
  startYear: number;
  startMonth: string;
  isCurrent?: false;
  endYear: number;
  endMonth: string;
};

export enum TimePeriodField {
  IsCurrent = 'isCurrent',
  StartYear = 'startYear',
  StartMonth = 'startMonth',
  EndYear = 'endYear',
  EndMonth = 'endMonth'
}

export enum Month {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December'
}
