import { useQuery } from '@tanstack/react-query'

import * as API from './api.ts'

export function useScraper(username: string) {
  const query = useQuery({
    queryKey: ['scraper'],
    queryFn: () => API.getKeywords(username),
  })

  return { ...query }
}

export function useCards() {
  const keywords = 'dogs'
  const query = useQuery({
    queryKey: ['cards'],
    queryFn: () => API.getCards(keywords),
  })

  return {
    ...query,
  }
}
