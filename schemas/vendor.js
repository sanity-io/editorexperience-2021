export default {
  name: 'vendor',
  title: 'Vendor',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    // different string types - predefined lists - use case 
    {
      title: 'Region',
      name: 'region',
      type: 'string',
      initialValue: 'us-south',
      options: {
        list: [
          {title: 'US-North', value: 'us-north'},
          {title: 'US-South', value: 'us-south'},
          {title: 'US-East', value: 'us-east'},
          {title: 'US-West', value: 'us-west'},
          {title: 'UK', value: 'uk'},
          {title: 'Europe', value: 'europe'},
        ], // <-- predefined values
        //layout: 'radio' // <-- defaults to 'dropdown'
      }
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
      name: 'logo',
      title: 'logo',
      type: 'image',
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
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
}
