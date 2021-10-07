export default {
    type: 'document',
    name: 'page',
    title: 'Page',
    fields: [{
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Keep the title informative. Preferably check its score in our SEO tool.',
            validation: Rule => Rule.max(60).warning('Your title should preferably be under 60 characters for SEO')
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule => Rule.custom((slug, context) => {
                const { document /* , parent, path, type */ } = context

                if (slug.current && !document.title) {
                    return "There's a slug, but no title 🤨"
                }
                return true
            }),
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
            fields: [{
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