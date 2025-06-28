import { defineType } from 'sanity'
import { ProjectField } from './types'

export const projectSchema = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: ProjectField.Title,
      type: 'string',
      validation: Rule => Rule.required().min(2).max(100)
    },
    {
      name: ProjectField.Description,
      type: 'text',
      validation: Rule => Rule.required().min(20).max(1000)
    },
    {
      name: ProjectField.TechnologiesUsed,
      type: 'technologiesUsed',
      description: 'Technologies, tools, or skills used in this project.'
    },
    {
      name: ProjectField.Image,
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true },
      description: 'A screenshot or logo of the project.'
    },
    {
      name: ProjectField.Github,
      title: 'GitHub Link',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: false, scheme: ['https'] })
    },
    {
      name: ProjectField.LiveDemo,
      title: 'Live Demo Link',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: false, scheme: ['https'] })
    },
    {
      name: ProjectField.Favourite,
      type: 'boolean',
      description: 'Mark this project as a favourite to highlight it on the UI.',
      initialValue: false
    }
  ]
})
