import fs from 'fs'
import OpenAI from 'openai'

const openai = new OpenAI()

async function main() {
  // Cast the ReadStream to `any` to appease the TypeScript compiler
  const response = await openai.images?.edit({
    model: 'dall-e-3',
    image: fs.createReadStream('sunlit_lounge.png'),
    mask: fs.createReadStream('mask.png'),
    prompt: 'A sunlit indoor lounge area with a pool containing a flamingo',
    n: 1,
    size: '1024x1024',
  })
  const image_url = response.data[0].url

  console.log(image_url)
}
main()
