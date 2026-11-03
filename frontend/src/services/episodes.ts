import type { Episode } from '../types/episode'

export async function fetchEpisodes(signal?: AbortSignal): Promise<Episode[]> {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api'
  const response = await fetch(`${baseUrl.replace(/\/$/, '')}/list`, { signal })

  if (!response.ok) {
    throw new Error('Não foi possível carregar os episódios.')
  }

  return response.json() as Promise<Episode[]>
}
