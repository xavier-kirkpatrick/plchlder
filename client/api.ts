import request from 'superagent'
import { ICard } from '../models/card.ts'

const rootUrl = '/api/v1'

export async function getKeywords() {
  return ['space', 'dogs', 'chilli']
}

export async function getCards(): Promise<ICard[]> {
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
  // return request
  //   .get(`${rootUrl}/fruits`)
  //   .then((res) => res.body.fruits)
  //   .catch(logError)
}

// interface AddFruitFunction {
//   fruit: FruitData
//   token: string
// }
// export async function addFruit({
//   fruit,
//   token,
// }: AddFruitFunction): Promise<Fruit> {
//   await sleep(1500)

//   return request
//     .post(`${rootUrl}/fruits`)
//     .set('Authorization', `Bearer ${token}`)
//     .send({ fruit })
//     .then((res) => res.body.fruit)
//     .catch(logError)
// }

// interface UpdateFruitFunction {
//   fruit: Fruit
//   token: string
// }
// export async function updateFruit({
//   fruit,
//   token,
// }: UpdateFruitFunction): Promise<Fruit> {
//   await sleep(1500)

//   return request
//     .put(`${rootUrl}/fruits/${fruit.id}`)
//     .set('Authorization', `Bearer ${token}`)
//     .send({ fruit })
//     .then((res) => res.body.fruit)
//     .catch(logError)
// }

// interface DeleteFruitFunction {
//   id: number
//   token: string
// }
// export async function deleteFruit({
//   id,
//   token,
// }: DeleteFruitFunction): Promise<void> {
//   await sleep(1500)

//   return request
//     .delete(`${rootUrl}/fruits/${id}`)
//     .set('Authorization', `Bearer ${token}`)
//     .then((res) => res.body)
//     .catch(logError)
// }

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
