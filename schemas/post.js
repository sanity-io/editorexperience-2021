export default {
    name: 'post',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        title: 'Vendor Partners',
        name: 'vendorPartners',
        type: 'reference',
        to: [{type: 'vendor'}]
      },
      {
        title: 'Vendor Logo',
        name: 'vendorLogo',
        type: 'figure',
        description:
          'SVG Only - Ideally this image has a transparent background for use over other images or on non-white backgrounds.',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'authors',
        type: 'array',
        title: 'Author(s)',
        description: 'Credit yourself and fellow authors',
        of: [
          {
            type: 'reference',
            to: [{type: 'person'}],
          },
        ],
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
      prepare(selection) {
        const {author} = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`,
        })
      },
    },
  }