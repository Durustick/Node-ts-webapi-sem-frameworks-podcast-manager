import { Headphones } from 'lucide-react'
import type { Episode } from '../../types/episode'
import EpisodeCard from '../EpisodeCard'
import { Banner, BannerIcon, EpisodeGrid, StatusMessage } from './styles'

type EpisodeResultsProps = { episodes: Episode[]; loading: boolean; error: string }

function EpisodeResults({ episodes, loading, error }: EpisodeResultsProps) {
  if (error) {
    return <StatusMessage $error role="alert">{error}</StatusMessage>
  }

  if (loading) {
    return <StatusMessage role="status">Carregando episódios...</StatusMessage>
  }

  if (!episodes.length) {
    return <StatusMessage role="status">Nenhum episódio encontrado.</StatusMessage>
  }

  return <>
    <EpisodeGrid>
      {episodes.map((episode, index) => (
        <EpisodeCard key={episode.videoId} episode={episode} index={index} />
      ))}
    </EpisodeGrid>
    <Banner>
      <BannerIcon><Headphones size={19} /></BannerIcon>
      <div>
        <span>FEITO PRA ACOMPANHAR SEU DIA</span>
        <strong>Uma história de cada vez. No seu ritmo.</strong>
      </div>
    </Banner>
  </>
}

export default EpisodeResults
