import request from 'superagent'
import { ICard } from '../models/card.ts'

const rootUrl = '/api/v1'

export async function getKeywords(username: string) {
  // TODO: take insta username as param, return keywords from scraper

  // const result = request
  //   .get(`${rootUrl}/scrape?username=${username}`)
  //   .then((res) => res.body.keywords)
  //   .catch(logError)
  // return result

  // Mock data
  return ['space', 'dogs', 'chilli']
}

export async function getCards(keywords: string): Promise<ICard[]> {
  // take keywords as param, return card images

  // return request
  //   .get(`${rootUrl}/cards?keywords=${keywords}`)
  //   .then((res) => res.body.imageUrls)
  //   .catch(logError)

  // Mock data
  const cardData: ICard[] = [
    {
      id: 1,
      imgUrl: 'https://threadheads.com/cdn/shop/files/GreetingCards-085.jpg',
    },
    {
      id: 2,
      imgUrl: 'https://threadheads.com/cdn/shop/files/GreetingCards-089.jpg',
    },
    {
      id: 3,
      imgUrl: 'https://threadheads.com/cdn/shop/files/GreetingCards-097.jpg',
    },
  ]

  return cardData
}

function logError(err: Error) {
  console.log(err)
  if (err.message === 'Username Taken') {
    throw new Error('Username already taken - please choose another')
  } else if (err.message === 'Forbidden') {
    throw new Error(
      'Only the user who added the fruit may update and delete it'
    )
  } else {
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}
