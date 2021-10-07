export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    initialValue: {
        image: {
            _type: "image",
            asset: {
                _type: "reference",
                _ref: "image-07e38fdf069140acbf6f680ab48b495a67ef677c-860x830-png"
            },
            alt: "Anonymous avatar"
        }
    },
    fields: [{
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
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
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [{
                title: 'Block',
                type: 'block',
                styles: [{ title: 'Normal', value: 'normal' }],
                lists: [],
            }, ],
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}