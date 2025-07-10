import { BookmarkIcon } from "@sanity/icons";
import { defineField, defineType } from 'sanity';

export const lastReads = defineType({
  name: 'lastReads',
  icon: BookmarkIcon,
  title: 'Reading List',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Title for this section, e.g. My Favorite Books',
    }),
    defineField({
      name: 'books',
      type: 'array',
      of: [
        {
          name: 'book',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'author',
              type: 'string',
            }),
            defineField({
              name: 'cover',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'percentageCompleted',
              type: 'number',
              description: 'How much of the book you have read (0-100%)',
              validation: Rule => Rule.min(0).max(100).required(),
            }),
            defineField({
              name: 'goodreads',
              title: 'Goodreads Link',
              type: 'url',
            }),
            defineField({
              name: 'note',
              title: 'Review or Note',
              type: 'text',
              description: 'A short review or personal note about the book',
            }),
            defineField({
              name: 'dateCompleted',
              type: 'date',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `${title || '📚 Favorite Books'}`,
        subtitle: `✨ List of your favorite books and reading progress 📖`,
      };
    },
  },
});
