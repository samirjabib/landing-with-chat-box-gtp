import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPageRecord',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'titleHeroBox',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'titleHeroBox',
      type: 'string',
      title: 'Title Hero Box',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contentHeroBox',
      type: 'text',
      title: 'Content Hero Box',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactButtonText',
      type: 'string',
      title: 'Contact Button Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'servicesButtonText',
      type: 'string',
      title: 'Services Button Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageHeroBox',
      type: 'image',
      title: 'Image Hero Box',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'titleServices',
      type: 'string',
      title: 'Title Services',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitleServices',
      type: 'string',
      title: 'Subtitle Services',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'servicesContent',
      name: 'Services Content',
      type: 'array',
      of: [
        {
          title: 'Address',
          name: 'address',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    }),
  ],
})
