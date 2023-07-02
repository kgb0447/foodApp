import {defineType} from 'sanity'

export default defineType({
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'User Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'user_email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'user_password',
      type: 'string',
      title: 'User Password',
      validation: (Rule) =>
        Rule.required()
          .min(8)
          .max(16)
          .error('Please enter a password between 8 to 16 characters')
          .custom((password) => {
            // @ts-ignore
            if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
              return true
              // @ts-ignore
            } else if (/\d/.test(password)) {
              return true
              // @ts-ignore
            } else if (/[A-Z]/.test(password)) {
              return true
            } else {
              return 'Password must contain at least one special character, number and a capital letter'
            }
          }),
    },
    {
      name: 'user_contact_number',
      type: 'string',
      title: 'Phone Number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'user_address',
      type: 'string',
      title: 'Address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'user_cart',
      type: 'array',
      title: 'Cart',
      of: [
        {
          type: 'reference',
          to: [{type: 'dish'}],
        },
      ],
    },
    {
      name: 'purchase_history',
      title: 'Purchase History',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'dish'}],
        },
      ],
    },
    {
      name: 'favorites',
      title: 'Purchase History',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'dish'}],
        },
      ],
    },
  ],
})
