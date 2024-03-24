import express from 'express'
import { parseToKeywords, scrapeProfile } from '../services/scraper'
import { parseToDescription } from '../services/cohere'
// import { JwtRequest } from '../auth0.ts'

const router = express.Router()

// A public endpoint that anyone can access
// GET /api/v1/keywords
router.get('/', async (req, res) => {
  try {
    const username = req.query.username

    // ensure username is just a string
    if (typeof username !== 'string') {
      return res.status(400).send('Bad request')
    }

    // Call function to scrape profile
    const profileData = await scrapeProfile(username)

    // Parse scraped data through an LLM to convert to keywords
    const keywords = await parseToKeywords(profileData)

    // Parse to description object to generate images with
    const description = await parseToDescription(keywords)

    // mock returned keywords
    res.json({ keywords, description })
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
