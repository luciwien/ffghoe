export default {
  name: "friends",
  title: "Freund*innen",
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString()
  }),
  fields: [
    {
      name: "title",
      title: "Name of the Friends",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "excerpt",
      title: "Excerpt",
      description:
        "The excerpt is used in blog feeds, and also for search results",
      type: "text",
      rows: 3,
      validation: Rule => Rule.max(200)
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity."
        },
        {
          name: "copyright",
          type: "string",
          title: "Copyright",
          description: "Credit where credit is due!"
        }
      ],
    },
    {
      name: "url",
      type:"url",
      title:"Link zu der Seite unserer Freund*innen",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    },
  ],
};
