import { createClient } from 'next-sanity'
import { HI } from '@shared/groq/cv'

// Configure your Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-06-29',
  useCdn: true,
})

export async function fetchCv() {
  return client.fetch(HI)
}