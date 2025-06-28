import { defineType } from 'sanity'
import { TechnologiesFields, Technology } from "./types"

export const technologiesUsedObject = defineType({
  name: 'technologiesUsed',
  title: 'Technologies Used',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: TechnologiesFields.TechnologyChoice,
          type: 'string',
          options: {
            list: Object.values(Technology).sort(
              (a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })
            ).map(value => ({
              title: value.charAt(0).toUpperCase() + value.slice(1),
              value
            })),
          },
          hidden: ({ parent }) => !!parent?.[TechnologiesFields.FreeText] && parent[TechnologiesFields.FreeText].length > 0
        },
        {
          name: TechnologiesFields.FreeText,
          type: 'string',
          validation: Rule => Rule.max(30).min(2),
          hidden: ({ parent }) => !!parent?.[TechnologiesFields.TechnologyChoice] && parent[TechnologiesFields.TechnologyChoice].length > 0
        },
      ],
      validation: Rule => Rule.custom((fields: { technologyChoice?: string; freeText?: string }) => {
        const hasTech = (fields?.[TechnologiesFields.TechnologyChoice] ?? '').length > 0 ;
        const hasFree = (fields?.[TechnologiesFields.FreeText] ?? '').length > 0;
        return hasTech || hasFree ? true : 'Please select a technology or enter free text.';
      }),
      preview: {
        select: {
          technologyChoice: TechnologiesFields.TechnologyChoice,
          freeText: TechnologiesFields.FreeText,
        },
        prepare({ technologyChoice, freeText }) {
          return {
            title: technologyChoice ?? freeText,
          }
        }
      }
    }
  ],
  description: 'Technologies, tools, or skills used.',
})
