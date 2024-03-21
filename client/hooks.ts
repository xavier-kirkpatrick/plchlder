import { useQuery } from '@tanstack/react-query'

import * as API from './api.ts'

export function useScraper() {
  const url = 'https://www.instagram.com/pooleypoo/'

  const query = useQuery({
    queryKey: ['scraper'],
    queryFn: () => API.getKeywords(url),
  })

  return { ...query }
}

export function useCards() {
  const query = useQuery({
    queryKey: ['cards'],
    queryFn: API.getCards,
  })

  return {
    ...query,
    // update: useUpdateFruit(),
    // delete: useDeleteFruit(),
    // add: useAddFruit(),
  }
}
