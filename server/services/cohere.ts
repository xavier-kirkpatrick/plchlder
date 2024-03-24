import dotenv from 'dotenv'
import { CohereClient } from 'cohere-ai'

dotenv.config()

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
})

const keywords = [
  'streetart',
  'final days',
  'temple',
  'Big Buddha',
  'lookout',
  'rescue',
  'white temple',
  'art project',
  'red panda',
  'monkey',
  'utes',
]

async function generate(keywords: string[]) {
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
  console.log(result)
  return result
}

generate(keywords)

// To test:
// npx tsx ./server/services/cohere.ts

// Received response:   Active and creative, they have a keen interest in street art and temples, and has visited many renowned places of worship in Bangkok and Chiang Mai, including the Wat Phra That Doi Suthep and the White Temple. They have an artistic side and has perhaps undertaken an art project themselves! They love animals and have had many memorable encounters with monkeys and pandas. They also has an interest in the great outdoors, and has spent time at Flinders Street and other scenic lookouts, and has visited the Tham Luang Cave during happier final days.

// This person is probably from Australia and has a curious, adventurous side who enjoys exploring the world and appreciating different cultures and forms of art.They lead a balanced life, soaking in serene temples and buzzing streets filled with vibrant art and bustling energy.
// Received output: ```json
// {
// "interests": ["Street Art", "Temples", "Art", "Animals", "The Great Outdoors"],
// "locations": ["Bangkok", "Chiang Mai", "Wat Phra That Doi Suthep", "White Temple", "Flinders Street", "Tham Luang Cave"],
// "personal": "Active, creative, artistic, adventurous, curious, balanced"
// }
// ```

// Let me know if you'd like me to extract any more information from the given text!
