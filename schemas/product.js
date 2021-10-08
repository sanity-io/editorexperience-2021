export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [{
    name: 'title',
    title: 'Title',
    type: 'string',
  },
  {
    title: 'Short Product Description',
    description: 'Brief description of the product. Keep it short, 2 lines maximum.',
    name: 'shortDesc',
    type: 'text',
    rows: 2,
  },
  {
    title: 'Long Product Description',
    description: 'Provide a thorough description of product including ingredients and how it is made.',
    name: 'longDesc',
    type: 'array',
    of: [{ type: 'block' }],
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
    title: 'Default variant',
    name: 'defaultProductVariant',
    type: 'productVariant',
  },
  {
    title: 'Variants',
    name: 'variants',
    type: 'array',
    hidden: ({ value, document }) => !value && !document?.defaultProductVariant,
    of: [{
      title: 'Variant',
      type: 'productVariant',
    },],
  },
  {
    title: 'Tags',
    name: 'tags',
    type: 'array',
    of: [{
      type: 'string',
    },],
    options: {
      layout: 'tags',
    },
  },
  {
    name: 'vendor',
    title: 'Vendor',
    type: 'reference',
    to: { type: 'vendor' },
  },
  {
    name: 'blurb',
    title: 'Blurb',
    type: 'localeString',
  },
  {
    name: 'categories',
    title: 'Categories',
    type: 'array',
    of: [{
      type: 'reference',
      to: { type: 'category' },
    },],
  },
  {
    name: 'body',
    title: 'Body',
    type: 'localeBlockContent',
  },
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'defaultProductVariant.images[0]',
    },
  },
}