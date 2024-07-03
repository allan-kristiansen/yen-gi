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
      name: 'sectionInfo',
      title: 'Section info',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
          ],
          lists: [],
          marks: {
            decorators: [],
            annotations: [],
          },
        }
      ],
    }),
    defineField({
      name: 'altText',
      title: 'Alt text for image',
      type: 'string'
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
              rows: 1
            },
            {
              title: 'URL',
              name: 'href',
              type: 'url',
              validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
              })
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
            }
          },
        },
      ],
    }),
    defineField({
      title: 'Contact info',
      name: 'contact',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Contact text left',
              name: 'TextLeft',
              type: 'text',
              rows: 1
            },
            {
              title: 'Contact text right',
              name: 'TextRight',
              type: 'text',
              rows: 1
            },
            {
              title: 'URL',
              name: 'href',
              type: 'url',
              validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
              })
            }
          ],
          preview: {
            select: {
              title: 'TextLeft',
              subtitle: 'href',
            }
          },
        },
      ],
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
