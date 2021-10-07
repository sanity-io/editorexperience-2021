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
          { title: 'US-North', value: 'us-north' },
          { title: 'US-South', value: 'us-south' },
          { title: 'US-East', value: 'us-east' },
          { title: 'US-West', value: 'us-west' },
          { title: 'UK', value: 'uk' },
          { title: 'Europe', value: 'europe' },
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
      title: 'Vendor Partners',
      name: 'vendorPartners',
      type: 'reference',
      to: [{ type: 'vendor' }]
    },
    {
      title: 'Vendor Logo',
      name: 'vendorLogo',
      type: 'logo',
      description:
        'SVG Only - Ideally this image has a transparent background for use over other images or on non-white backgrounds.',
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
