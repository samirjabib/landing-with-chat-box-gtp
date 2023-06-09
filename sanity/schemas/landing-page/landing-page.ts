import {defineField, defineType} from 'sanity'
import LandingHero from './landing-hero'
import LandingServices from './landing-services'
// Import the landingHero type

export default defineType({
  name: 'landingPageRecord',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(5).max(50),
    }),
    defineField({
      name: 'landingHero',
      type: 'object',
      title: 'Landing Hero',
      fields: [...LandingHero.fields],
    }),
    defineField({
      name: 'landingServices',
      type: 'object',
      title: 'Landing Services',
      fields: [...LandingServices.fields],
    }),
  ],
})
