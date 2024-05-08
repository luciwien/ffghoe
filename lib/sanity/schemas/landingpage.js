import { ComponentIcon } from '@sanity/icons'


import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'landingpage',
  type: 'document',
  title: 'Landing Page',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Überschrift'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description:
        'Die Subheadline',
      type: 'text',
      rows: 1,
      validation: Rule => Rule.max(200)
    }),
    defineField({
      name: 'beschreibung',
      title: 'Beschreibung',
      type: 'blockContent'
    }),
    defineField({
      name: 'articles',
      type: 'array',
      title: 'Posts',
      description: 'Featured Articles',
      of: [{ type: 'reference', name: 'any', to: [{ type: 'post' }] }]
    }),
    defineField({
      name: 'subsites',
      type: 'array',
      title: 'Subsites',
      description: 'Topics on the Website',
      of: [{
        type: 'object', fields: [
          {
            title: 'Title',
            name: 'title',
            type: 'string'
          },
          {
            title: 'link',
            name: 'link',
            type: 'string'
          },
          {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                description: 'Important for SEO and accessiblity.'
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
            name: 'description',
            title: 'Description',
            description:
              'Description',
            type: 'text',
            rows: 3,
            validation: Rule => Rule.max(300)
          }]
      }]
    })
  ]
})
