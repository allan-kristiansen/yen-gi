import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'post',
  title: 'Section',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "post" }),
    
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Link text',
              name: 'linkText',
              type: 'text',
              rows: 1,
              validation: rule => rule.required().max(20)
            },
            {
              title: 'URL',
              name: 'href',
              type: 'url',
            },
            {
              name: 'outline',
              title: 'Outline',
              type: 'image',
            },
          ],
          preview: {
            select: {
              title: 'linkText',
              subtitle: 'href',
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle: new URL(subtitle).hostname,
              };
            },
          },
        },
      ],
    }),
  ],
})
