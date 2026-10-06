import { UserIcon } from "@sanity/icons/User";
// title - slug - publishedat - body - cta

import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "mitgliedWerden",
  type: "document",
  title: "Mitglied werden",
  icon: UserIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Site title"
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent"
    }),
    defineField({
      name: "cta",
      title: "URL zum formular",
      type: "url"
    })
  ]
});

