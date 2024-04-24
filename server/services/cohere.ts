import dotenv from 'dotenv'
import { CohereClient } from 'cohere-ai'

dotenv.config()

if (!process.env.COHERE_API_KEY) {
  throw new Error('Missing COHERE_API_KEY')
}

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
})

/* Mock data NOT in use ATM */
//----------------
// const keywords = [
//   'streetart',
//   'final days',
//   'temple',
//   'Big Buddha',
//   'lookout',
//   'rescue',
//   'white temple',
//   'art project',
//   'red panda',
//   'monkey',
//   'utes',
// ]

export async function parseToDescription(keywords: string[]) {
  const instructions =
    '## Instructions: \nTake this list of words about a person, and return a descriptive profile about them.\n' +
    'DO: output in JSON format, using bullet points with the headings "interests", "personality", "locations".\n' +
    'DO NOT: ask any questions, just output the descriptive profile.\n\n'

  const input = '## Input list: \n' + keywords.join(', ') + '\n\n'

  const message = instructions + input

  const response = await cohere.generate({
    prompt: message,
  })

  const result = JSON.parse(response.generations[0].text)
  return result
}
