import { Rule } from '@sanity/types'

export default {
  name: 'workProject',
  title: 'Work Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .slice(0, 96)
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'date',
      title: 'Project Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule: Rule) => Rule.required().error('Alt text is required')
        }
      ],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'gridImages',
      title: 'Grid Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule: Rule) => Rule.required().error('Alt text is required')
            },
            {
              name: 'gridColumn',
              title: 'Grid Column Span',
              type: 'number',
              options: {
                list: [
                  {title: '1 Column', value: 1},
                  {title: '2 Columns', value: 2},
                  {title: '3 Columns', value: 3},
                  {title: '4 Columns', value: 4},
                  {title: '6 Columns', value: 6},
                  {title: 'Full Width', value: 12}
                ]
              },
              validation: (Rule: Rule) => Rule.required()
            }
          ]
        }
      ]
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Mark as featured to show at the top of the Work page'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to control the order of projects on the Work page (lower numbers appear first)',
      validation: (Rule: Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'mainImage'
    }
  }
}; 