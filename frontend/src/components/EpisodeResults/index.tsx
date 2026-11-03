import { ArrowUpRight, Headphones } from 'lucide-react'
import type { Episode } from '../../types/episode'
import EpisodeCard from '../EpisodeCard'
import { Banner, BannerIcon, EmptyNotice, EpisodeGrid, ErrorNotice, NoticeIcon, Spinner } from './styles'

type EpisodeResultsProps = { episodes: Episode[]; loading: boolean; error: string }

function EpisodeResults({ episodes, loading, error }: EpisodeResultsProps) {
  if (error) return <ErrorNotice><NoticeIcon>!</NoticeIcon><div><strong>Seus episódios estão quase chegando.</strong><p>{error}</p></div></ErrorNotice>
  if (loading) return <EmptyNotice><Spinner /> Carregando episódios...</EmptyNotice>
  if (!episodes.length) return <EmptyNotice><Headphones size={24} /><strong>Nenhum episódio encontrado.</strong><p>Tente buscar outro termo ou escolha um podcast diferente.</p></EmptyNotice>

  const featuredEpisode = episodes[0]
  return <>
    <EpisodeGrid>{episodes.map((episode, index) => <EpisodeCard key={episode.videoId} episode={episode} index={index} />)}</EpisodeGrid>
    <Banner><BannerIcon><Headphones size={19} /></BannerIcon><div><span>FEITO PRA ACOMPANHAR SEU DIA</span><strong>Uma história de cada vez. No seu ritmo.</strong></div></Banner>
  </>
}

export default EpisodeResults
