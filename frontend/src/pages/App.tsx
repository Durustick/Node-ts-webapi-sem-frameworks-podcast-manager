import { useEffect, useState } from 'react'
import EpisodeResults from '../components/EpisodeResults'
import EpisodeToolbar from '../components/EpisodeToolbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { fetchEpisodes } from '../services/episodes'
import { CatalogSection, Container, EpisodeCount, SectionEyebrow, SectionHeading } from './styles'
import type { Episode } from '../types/episode'

const ALL_PODCASTS = 'Todos os podcasts'

function App() {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [selectedPodcast, setSelectedPodcast] = useState(ALL_PODCASTS)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadEpisodes() {
      try {
        const data = await fetchEpisodes(controller.signal)
        setEpisodes(data)
      } catch (reason) {
        if (!controller.signal.aborted) {
          const message = reason instanceof Error
            ? reason.message
            : 'Não foi possível carregar os episódios.'

          setError(message)
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    void loadEpisodes()

    return () => controller.abort()
  }, [])

  const searchTerm = query.trim().toLocaleLowerCase('pt-BR')
  const podcasts = [...new Set(episodes.map((episode) => episode.podcastName))]
  const visibleEpisodes = episodes.filter((episode) => {
    const matchesPodcast = selectedPodcast === ALL_PODCASTS || episode.podcastName === selectedPodcast
    const searchableText = [episode.episode, episode.podcastName, ...episode.categories]
      .join(' ')
      .toLocaleLowerCase('pt-BR')

    return matchesPodcast && searchableText.includes(searchTerm)
  })

  return (
    <Container>
      <Header />
      <Hero />
      <CatalogSection id="episodios">
        <SectionHeading>
          <div>
            <SectionEyebrow>CURADORIA PRA SUA ROTINA</SectionEyebrow>
            <h2>Escolha sua próxima escuta<span>.</span></h2>
          </div>
          <EpisodeCount>
            <strong>{String(visibleEpisodes.length).padStart(2, '0')}</strong>
            <span> episódios<br />para descobrir</span>
          </EpisodeCount>
        </SectionHeading>
        <EpisodeToolbar
          query={query}
          podcasts={podcasts}
          selectedPodcast={selectedPodcast}
          onQueryChange={setQuery}
          onPodcastChange={setSelectedPodcast}
        />
        <EpisodeResults
          episodes={visibleEpisodes}
          loading={loading}
          error={error}
        />
      </CatalogSection>
      <Footer />
    </Container>
  )
}

export default App
