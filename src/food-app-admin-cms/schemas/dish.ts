import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Dish',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the Dish in Php',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Dish',
    },
    {
      name: 'dish_category',
      type: 'array',
      title: 'Dish Category',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    },
  ],
})
