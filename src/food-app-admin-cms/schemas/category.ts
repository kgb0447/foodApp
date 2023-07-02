import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Category',
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Lists of Dish',
      of: [
        {
          type: 'reference',
          to: [{type: 'dish'}],
        },
      ],
    },
  ],
})
