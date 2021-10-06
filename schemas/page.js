export default {
    type: 'document',
    name: 'page',
    title: 'Page',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
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

    ]
}