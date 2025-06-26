import { Rule } from '@sanity/types'

export default {
  name: 'journalPost',
  title: 'Journal Post',
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
      name: 'date',
      title: 'Publish Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'News', value: 'news' },
          { title: 'Media', value: 'media' },
          { title: 'Explorations', value: 'explorations' }
        ],
        layout: 'radio'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
      description: 'Short intro shown in cards and featured blocks'
    },
    {
      name: 'mainSubHeading',
      title: 'Main Sub Heading',
      type: 'string',
    },
    {
      name: 'mainBody',
      title: 'Main Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'subHeading1',
      title: 'Sub Heading 1',
      type: 'string',
    },
    {
      name: 'body1',
      title: 'Body 1',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'subHeading2',
      title: 'Sub Heading 2',
      type: 'string',
    },
    {
      name: 'body2',
      title: 'Body 2',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'subHeading3',
      title: 'Sub Heading 3',
      type: 'string',
    },
    {
      name: 'body3',
      title: 'Body 3',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Mark as featured to show at the top of the Journal index'
    },
    {
      name: 'moreArticlesTag',
      title: 'Related Articles Tag',
      type: 'string',
      description: 'Used for grouping related articles'
    },
    {
      name: 'themeColor',
      title: 'Theme Color',
      type: 'string',
      readOnly: true,
      initialValue: 'sunny',
      hidden: true
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage'
    }
  }
}; 