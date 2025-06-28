import { defineType } from 'sanity'
import { CVTheme, CVField } from './types'
import { WebsiteCvInfoInput } from '../../../components/WebsiteCvInfoInput'

export const cvSchema = defineType({
  name: 'cv',
  title: 'CV',
  type: 'document',
  fields: [
    {
      name: 'websiteCvInfo',
      type: 'string',
      components: {
        field:  WebsiteCvInfoInput,
      },
      readOnly: true,
      hidden: false,
    },
    {
      name: CVField.Title,
      type: 'string',
      validation: Rule => Rule.required().min(2).max(100)
    },
    {
      name: CVField.MyDetails,
      type: 'reference',
      to: [{ type: 'myDetails' }],
      description: 'Reference to the main details document.',
      validation: Rule => Rule.required()
    },
    {
      name: CVField.Experiences,
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'experience' }] }],
      description: 'List of experiences to include in this CV. Order uses employment period'
    },
    {
      name: CVField.Projects,
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      description: 'List of projects to include in this CV. Ordered by project order in this list',
    },
    {
      name: CVField.Volunteering,
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'volunteering' }] }],
      description: 'List of volunteering experiences to include in this CV. Ordered by volunteering period',
    },
    {
      name: CVField.IsWebsiteCv,
      type: 'boolean',
      description: 'Set this CV as the main website CV.',
      initialValue: false,
      hidden: () => true,
    },
    {
      name: CVField.Theme,
      type: 'string',
      options: {
        list: Object.values(CVTheme)
      },
      description: 'Select the website theme for this CV.'
    }
  ],
  preview: {
    select: {
      title: CVField.Title,
      isWebsiteCv: CVField.IsWebsiteCv,
    },
    prepare(selection) {
      const { title, isWebsiteCv } = selection
      return {
        title: title || 'Untitled CV',
        subtitle: isWebsiteCv ? `✅` : '❌',
      }
    }
  }
})
