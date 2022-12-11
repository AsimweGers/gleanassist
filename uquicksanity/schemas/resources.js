export default {
  name: "resources",
  title: "Resources",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      type: "string",
      title: "Author",
    },
    {
      name: "posturl",
      type: "string",
      title: "PostUrl",
    },
    {
      name: "authorimage",
      title: "AuthorImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      type: "string",
      title: "Category",
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
    },
    {
      name: "body",
      type: "blockContent",
      title: "Body",
    },
  ],
};
