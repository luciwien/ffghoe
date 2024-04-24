//book

import {BookIcon} from "@sanity/icons";
import {defineArrayMember, defineField, defineType} from "sanity";

export default defineType({
  name: "timeline",
  type: "document",
  title: "QFH - Zeitstrahl",
  icon: BookIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Link",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required(),
    }),
    defineField({

      name: "year",
      title: "Year",
      type: "number",
      validation: Rule => Rule.required(),
    }),
    defineField({
        name: "lgbtqia", type: "blockContent", title: "LGBTQIA+"
      }
    ),
    defineField({
        name: "fussball", type: "blockContent", title: "Fussball"
      }
    ),
    defineField({
      name: "lastChanged",
      title: "Last Changed",
      type: "date",
      validation: Rule => Rule.required(),
    })
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year'
    },
    prepare(selection) {
      const {title, year} = selection
      return {
        title: `${year} - ${title}`,
      }
    }
  },
  orderings: [{
    title: 'Default',
    name: 'default',
    by: [
      {field: 'year', direction: 'asc'}
    ]
  }]
});