import { UsersIcon } from '@sanity/icons'

export default {
  name: 'heroes',
  title: 'QFH - Heroes',
  icon: UsersIcon,
  type: 'document',
  initialValue: () => ({
    publishedAt: new Date().toISOString()
  }),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      description:
        'The excerpt is used in blog feeds, and also for search results',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(200)
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'url',
      type: 'url',
      title: 'Link zum Original Artikel'
    },
    {
      name: 'abgerufen',
      type: 'datetime',
      title: 'Wann wurde der Artikel abgerufen'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      fields: [
        // {
        //   name: "caption",
        //   type: "string",
        //   title: "Image caption",
        //   description: "Appears below image.",

        // },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.'
        },
        {
          name: 'description',
          type: 'string',
          title: 'Description',
          description: 'You can see that below the Picture.'
        },
        {
          name: 'copyright',
          type: 'string',
          title: 'Copyright',
          description: 'Credit where credit is due!'
        }
      ],
      options: {
        hotspot: true
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'featured',
      title: 'Mark as Featured',
      type: 'boolean'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}