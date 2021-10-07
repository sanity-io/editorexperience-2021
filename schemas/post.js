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
        title: 'Summary',
        name: 'description',
        type: 'string',
        description:
          'Give your reader a hint of what they can learn. Summaries appear in small places like preview cards.',
        validation: (Rule) => [
          Rule.required(),
          Rule.max(300).warning('Try to keep your Summary under 300 characters.'),
          Rule.min(30).warning('Try to provide enough information in your summary.'),
        ],
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
        description: 'Add a poster for preview cards or image related to to text.',
        fields: [
            {
              title: 'Caption',
              name: 'caption',
              type: 'string',
              options: {
                isHighlighted: true,
              },
              //hidden: true
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: 'Alternative text for screenreaders.',
              validation: Rule => [
                  Rule.required(),
                ],
              options: {
                isHighlighted: true,
              },
            },
        ],
        options: {
          hotspot: true,
        },
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
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