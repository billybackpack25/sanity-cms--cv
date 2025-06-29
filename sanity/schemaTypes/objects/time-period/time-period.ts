import { defineType } from 'sanity'
import { yearOptions, currentYear } from './utils'
import { TimePeriodField, Month } from "@shared/types/time-period";

export const timePeriodObject = defineType({
  name: 'timePeriod',
  title: 'Time Period',
  type: 'object',
  fieldsets: [
    {
      name: 'period',
      title: 'Period',
      options: { columns: 2 }
    }
  ],
  fields: [
    {
      name: TimePeriodField.IsCurrent,
      type: 'boolean',
      description: 'Check if this is your current role/position.',
      initialValue: false
    },
    {
      name: TimePeriodField.StartYear,
      type: 'number',
      fieldset: 'period',
      options: {
        list: yearOptions
      },
      description: 'Start year of the period (e.g., 2022).',
      validation: Rule => Rule.required().min(1910).max(currentYear)
    },
    {
      name: TimePeriodField.StartMonth,
      type: 'string',
      fieldset: 'period',
      options: {
        list: Object.values(Month)
      },
      description: 'The month of the period (e.g., January).',
      validation: Rule => Rule.required().min(3).max(9)
    },
    {
      name: TimePeriodField.EndYear,
      type: 'number',
      fieldset: 'period',
      options: {
        list: yearOptions
      },
      description: 'The year the period ended (e.g., 2022).',
      validation: Rule => Rule.custom((value, context) => {
        const isCurrent = context?.parent && typeof context.parent === 'object' ? (context.parent as any).isCurrent : false;
        if (isCurrent) return true;
        if (typeof value === 'number' && value >= 1910 && value <= currentYear) return true;
        return 'Required if not current role';
      }),
      hidden: ({ parent }) => parent?.isCurrent
    },
    {
      name: TimePeriodField.EndMonth,
      type: 'string',
      fieldset: 'period',
      options: {
        list: Object.values(Month)
      },
      description: 'The month the period ended (e.g., January).',
      validation: Rule => Rule.custom((value, context) => {
        const isCurrent = context?.parent && typeof context.parent === 'object' ? (context.parent as any).isCurrent : false;
        if (isCurrent) return true;
        if (typeof value === 'string' && value.length >= 3 && value.length <= 9) return true;
        return 'Required if not current role';
      }),
      hidden: ({ parent }) => parent?.isCurrent
    }
  ]
})
