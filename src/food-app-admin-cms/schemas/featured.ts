import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Food Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurant',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
})
