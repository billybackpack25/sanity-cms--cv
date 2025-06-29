import { defineType } from 'sanity'
import { EmploymentType, ExperienceField } from "@shared/types/experience"

export const experienceSchema = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: ExperienceField.Title,
      title: 'Job Title',
      type: 'string',
      description: 'The title of the position held.',
      validation: Rule => Rule.required().min(2).max(80)
    },
    {
      name: ExperienceField.EmploymentType,
      type: 'string',
      options: {
        list: Object.values(EmploymentType).map(value => ({
            title: value.charAt(0).toUpperCase() + value.slice(1),
            value
          }))
      },
      description: 'Type of employment.',
      validation: Rule => Rule.required().min(2).max(30)
    },
    {
      name: ExperienceField.Company,
      type: 'string',
      description: 'The name of the company or organization.',
      validation: Rule => Rule.required().min(2).max(80)
    },
    {
      name: ExperienceField.CompanyLink,
      title: 'Company Website',
      type: 'url',
      description: 'A link to the company website.'
    },
    {
      name: ExperienceField.Logo,
      title: 'Company Logo',
      type: 'image',
      description: 'Upload the company logo.'
    },
    {
      name: ExperienceField.Location,
      type: 'string',
      description: 'Where the job was located (city, country, or remote).',
      validation: Rule => Rule.required().min(2).max(80)
    },
    {
      name: ExperienceField.EmploymentPeriod,
      type: 'timePeriod',
      description: 'The period of employment.'
    },
    {
      name: ExperienceField.Description,
      type: 'text',
      description: 'A description of the role and responsibilities.',
      validation: Rule => Rule.required().min(100).max(1000).warning('Be concise and specific. Avoid long paragraphs and focus on key responsibilities and achievements.')
    },
    {
      name: ExperienceField.Highlights,
      type: 'array',
      of: [{ type: 'string', validation: Rule => Rule.min(20).max(200) }],
      description: 'Key achievements or highlights from this experience.'
    },
    {
      name: ExperienceField.TechnologiesUsed,
      type: 'technologiesUsed',
    },
    {
      name: ExperienceField.References,
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.min(2).max(80) },
            { name: 'email', title: 'Email', type: 'string', validation: Rule => Rule.min(5).max(100) },
            { name: 'phone', title: 'Phone', type: 'string', validation: Rule => Rule.min(7).max(20) }
          ]
        }
      ],
      description: 'Reference person for this experience.'
    },
  ],
})
