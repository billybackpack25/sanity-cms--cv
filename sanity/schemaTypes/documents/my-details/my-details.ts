import { defineType } from 'sanity'
import { MyDetailsField } from "@shared/types/my-details"

export const myDetailsSchema = defineType({
  name: 'myDetails',
  title: 'My Details',
  type: 'document',
  fields: [
    {
      name: MyDetailsField.FullName,
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(80)
    },
    {
      name: MyDetailsField.Title,
      type: 'string',
      validation: Rule => Rule.required().min(2).max(80),
      description: 'Your professional title or position (e.g., Software Engineer, Data Scientist, etc.).'
    },
    {
      name: MyDetailsField.ProfileImage,
      type: 'image',
      options: { hotspot: true },
      description: 'A professional headshot or avatar.'
    },
    {
      name: MyDetailsField.Email,
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email().max(100)
    },
    {
      name: MyDetailsField.Phone,
      type: 'string',
      validation: Rule => Rule.min(7).max(20),
      description: 'Your phone number (optional, can be left blank for privacy).'
    },
    {
      name: MyDetailsField.Location,
      type: 'string',
      validation: Rule => Rule.required().min(2).max(80),
      description: 'Your current city or region (optional, can be left blank for privacy).'
    },
    {
      name: MyDetailsField.ProfessionalSummary,
      type: 'text',
      validation: Rule => Rule.required().min(50).max(500),
      description: 'A brief professional summary or bio that highlights your skills and experience.'
    },
    {
      name: MyDetailsField.Linkedin,
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: false, scheme: ['https'] })
    },
    {
      name: MyDetailsField.Github,
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: false, scheme: ['https'] })
    },
    {
      name: MyDetailsField.Twitter,
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: false, scheme: ['https'] })
    },
    {
      name: MyDetailsField.OtherLinks,
      title: 'Other Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label',
              validation: Rule => Rule.required().min(2).max(40),
              description: 'A short label for the link (e.g., Portfolio, Blog, Personal Site).'
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              validation: Rule => Rule.uri({ allowRelative: false, scheme: ['https'] }).required(),
              description: 'The full URL to the resource.'
            }
          ]
        }
      ],
      description: 'Any other relevant links (e.g., portfolio, blog, etc.)',
    }
  ]
})
