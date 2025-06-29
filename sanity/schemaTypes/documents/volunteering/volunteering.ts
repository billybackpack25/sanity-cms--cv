import { defineType } from 'sanity'
import { VolunteeringField } from "@shared/types/volunteering"

export const volunteeringSchema = defineType({
  name: 'volunteering',
  title: 'Volunteering',
  type: 'document',
  fields: [
    {
      name: VolunteeringField.Role,
      type: 'string',
      validation: Rule => Rule.required().min(2).max(80),
      description: 'The role or position held during volunteering.'
    },
    {
      name: VolunteeringField.Organization,
      type: 'string',
      validation: Rule => Rule.required().min(2).max(100),
      description: 'The name of the organization.'
    },
    {
      name: VolunteeringField.OrganizationLink,
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
      description: 'A link to the organization website.'
    },
    {
      name: VolunteeringField.Location,
      type: 'string',
      validation: Rule => Rule.min(2).max(80),
      description: 'Where the volunteering took place (city, country, or remote).'
    },
    {
      name: VolunteeringField.VolunteeringPeriod,
      type: 'timePeriod',
      description: 'The period of volunteering.'
    },
    {
      name: VolunteeringField.Description,
      type: 'text',
      validation: Rule => Rule.required().min(20).max(1000),
      description: 'A description of your volunteering work and impact.'
    },
    {
      name: VolunteeringField.Highlights,
      type: 'array',
      of: [{ type: 'string', validation: Rule => Rule.min(10).max(200) }],
      description: 'Key achievements or highlights from this volunteering experience.'
    },
  ]
})
