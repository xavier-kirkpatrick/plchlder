import dotenv from 'dotenv'
import { CohereClient } from 'cohere-ai'

dotenv.config()

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
})

const keywords = [
  'streetart',
  'Flinders Street',
  'Thailand',
  'final days',
  'Wat Phra That Doi Suthep',
  'temple',
  'Big Buddha',
  'lookout',
  'Tham Luang Cave',
  'rescue',
  'white temple',
  'art project',
  'Chiang Rai',
  'red panda',
  'monkey',
  'utes',
  'Chiang Mai',
]

async function generate() {
  const prediction = await cohere.generate({
    prompt: `take this list of keywords about a person, and return a descriptive profile about them: ${keywords.join(
      ', '
    )}`,
    maxTokens: 500,
  })

  console.log('Received prediction: ', prediction.generations[0].text)

  const output = await cohere.generate({
    prompt: `output this in a short form machine readable format, for example just bullet pointed json with relevant headings: ${prediction.generations[0].text}`,
    maxTokens: 500,
  })

  console.log('Received output: ', output.generations[0].text)
}

generate()

// To test:
// npx tsx ./server/services/cohere.ts

// Received prediction:   Active and creative, they have a keen interest in street art and temples, and has visited many renowned places of worship in Bangkok and Chiang Mai, including the Wat Phra That Doi Suthep and the White Temple. They have an artistic side and has perhaps undertaken an art project themselves! They love animals and have had many memorable encounters with monkeys and pandas. They also has an interest in the great outdoors, and has spent time at Flinders Street and other scenic lookouts, and has visited the Tham Luang Cave during happier final days.

// This person is probably from Australia and has a curious, adventurous side who enjoys exploring the world and appreciating different cultures and forms of art.They lead a balanced life, soaking in serene temples and buzzing streets filled with vibrant art and bustling energy.
// Received output: ```json
// {
// "interests": ["Street Art", "Temples", "Art", "Animals", "The Great Outdoors"],
// "locations": ["Bangkok", "Chiang Mai", "Wat Phra That Doi Suthep", "White Temple", "Flinders Street", "Tham Luang Cave"],
// "personal": "Active, creative, artistic, adventurous, curious, balanced"
// }
// ```

// Let me know if you'd like me to extract any more information from the given text!
