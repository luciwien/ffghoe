import {InfoOutlineIcon} from '@sanity/icons'


import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  type: "document",
  title: "Über uns",
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Überschrift"
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      description:
        "Die Subheadline",
      type: "text",
      rows: 1,
      validation: Rule => Rule.max(200)
    },),
    defineField({
      name: "beschreibung",
      title: "Beschreibung",
      type: "blockContent"
    }),
  ]
});
