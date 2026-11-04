import { Search, SlidersHorizontal } from 'lucide-react'
import { ClearButton, FilterBox, SearchBox, Toolbar } from './styles'

type EpisodeToolbarProps = {
  query: string
  podcasts: string[]
  selectedPodcast: string
  onQueryChange: (value: string) => void
  onPodcastChange: (value: string) => void
}

function EpisodeToolbar({ query, podcasts, selectedPodcast, onQueryChange, onPodcastChange }: EpisodeToolbarProps) {
  return (
    <Toolbar>
      <SearchBox>
        <Search size={18} aria-hidden="true" />
        <input
          aria-label="Buscar episódios"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Buscar por episódio, tema ou podcast..."
        />
      </SearchBox>
      <FilterBox>
        <SlidersHorizontal size={16} aria-hidden="true" />
        <span>Podcast</span>
        <select
          aria-label="Filtrar por podcast"
          value={selectedPodcast}
          onChange={(event) => onPodcastChange(event.target.value)}
        >
          <option>Todos os podcasts</option>
          {podcasts.map((podcast) => (
            <option key={podcast} value={podcast}>{podcast}</option>
          ))}
        </select>
      </FilterBox>
      {query && (
        <ClearButton type="button" onClick={() => onQueryChange('')}>
          Limpar busca
        </ClearButton>
      )}
    </Toolbar>
  )
}

export default EpisodeToolbar
