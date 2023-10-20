export default {
  name: "events",
  title: "Events",
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString()
  }),
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" }
    },
    {
      name: "von",
      title:"Von",
      type: "datetime"
    },
    {
      name: "bis",
      title:"Bis",
      type: "datetime"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      fields: [
        // {
        //   name: "caption",
        //   type: "string",
        //   title: "Image caption",
        //   description: "Appears below image.",

        // },
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity."
        },
        {
          name: "description",
          type: "string",
          title: "Description",
          description: "You can see that right under the Picture."
        },
        {
          name: "copyright",
          type: "string",
          title: "Copyright",
          description: "Credit where credit is due!"
        }
      ],
      options: {
        hotspot: true
      }
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    },
    {
      name: "featured",
      title: "Mark as Featured",
      type: "boolean"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
