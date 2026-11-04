import { ArrowUpRight } from 'lucide-react'
import type { Episode } from '../../types/episode'
import {
  CardBottom,
  CardMeta,
  CardNumber,
  Cover,
  CoverImage,
  CoverLink,
  EpisodeTitle,
  ItemContainer,
  PlayButton,
  PodcastTag,
  Tags,
  YouTubeLink,
} from './styles'

type EpisodeCardProps = { episode: Episode; index: number }

function EpisodeCard({ episode, index }: EpisodeCardProps) {
  const videoUrl = `https://www.youtube.com/watch?v=${episode.videoId}`

  return (
    <ItemContainer>
      <CoverLink
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver ${episode.episode} no YouTube`}
      >
        <Cover>
          <CoverImage
            src={episode.podcastImage}
            alt={`Capa do podcast ${episode.podcastName}`}
            loading="lazy"
            decoding="async"
          />
          <PlayButton><ArrowUpRight size={20} aria-hidden="true" /></PlayButton>
        </Cover>
      </CoverLink>
      <CardMeta>
        <PodcastTag>{episode.podcastName}</PodcastTag>
        <CardNumber>EP. {String(index + 1).padStart(2, '0')}</CardNumber>
      </CardMeta>
      <EpisodeTitle href={videoUrl} target="_blank" rel="noopener noreferrer">
        {episode.episode}
      </EpisodeTitle>
      <CardBottom>
        <Tags>
          {episode.categories.slice(0, 2).map((category) => (
            <span key={category}>{category}</span>
          ))}
        </Tags>
        <YouTubeLink href={videoUrl} target="_blank" rel="noopener noreferrer">
          Ver no YouTube <ArrowUpRight size={14} aria-hidden="true" />
        </YouTubeLink>
      </CardBottom>
    </ItemContainer>
  )
}

export default EpisodeCard
