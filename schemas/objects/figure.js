// Logos only accept svg files
function requireSvg (imgObj) {
    const ref = imgObj?.asset?._ref
    if (!ref) {
      return "svg is Required"
    }
    // image-e95a8b0fb7807092b6a43bd611a3cdf236a68d65-1079x424-png
    //const [assetType, _id, dimensions, fileType] = ref.split('-')
    //const [height, width] = dimensions.split('x')
    
    const extension = ref.split('-')[3]
      if (extension !== 'svg') {
        return "Logo must be svg"
      }
      return true
  }
  // Object for logos
  export default {
      type: 'object',
      name: 'figure',
      fieldsets: [
          {
            name: 'logoVersion', 
            title: 'Logo Versions',
            options: {
              collapsible: true, // Makes the whole fieldset collapsible
              collapsed: false, // Defines if the fieldset should be collapsed by default or not
              }
          }
      ],
      fields: [
          {
              name: 'logoTransparent',
              type: 'image',
              title: 'Logo-Transparent Brackground',
              fieldset: 'logoVersion',
              options: {
                hotspot: true,
                accept: ".svg",
              },
              validation: Rule => [
                Rule.required(),
                Rule.custom(requireSvg)
              ],
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                  description:  'Alternative text is required.',
                  validation: Rule => [
                      Rule.required(),
                  ],
                  options: {
                    isHighlighted: true,
                  }
                },
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true
                  }
                }
              ]
          },
          {
              name: 'logoDark',
              type: 'image',
              title: ' Logo-Dark Brackground',
              fieldset: 'logoVersion',
              options: {
                hotspot: true,
                accept: ".svg",
              },
              validation: Rule => [
                Rule.custom(requireSvg).warning()
              ],
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                  description:  'Alternative text is required.',
                  validation: Rule => [
                      Rule.required(),
                  ],
                  options: {
                    isHighlighted: true,
                  }
                },
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true
                  }
                }
              ]
          },
            
      ]
    }