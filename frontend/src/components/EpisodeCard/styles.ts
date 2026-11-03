import styled from 'styled-components'

export const ItemContainer = styled.article`
  min-width: 0;
`

export const CoverLink = styled.a`
  display: block;

  &:hover > div {
    transform: translateY(-3px);
  }
`

export const Cover = styled.div`
  position: relative;
  overflow: hidden;
  height: 148px;
  padding: 11px 12px;
  border-radius: 5px;
  background: #30213b;
  transition: transform 0.2s;

  @media (min-width: 1200px) {
    height: 174px;
  }

  @media (max-width: 800px) {
    height: clamp(145px, 30vw, 220px);
  }

  @media (max-width: 520px) {
    height: clamp(127px, 39vw, 190px);
    padding: 9px;
  }
`

export const CoverImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PlayButton = styled.span`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: grid;
  place-items: center;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  color: var(--color-purple-dark);
  background: var(--color-surface);
`

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 13px 0 7px;

  @media (max-width: 520px) {
    margin-top: 10px;
  }
`

export const PodcastTag = styled.span`
  padding: 4px 7px;
  border-radius: 3px;
  color: var(--color-purple-dark);
  background: var(--color-purple-soft);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
`

export const CardNumber = styled.span`
  color: #999a92;
  font-size: 8px;
  letter-spacing: 0.6px;
`

export const EpisodeTitle = styled.a`
  display: block;
  min-height: 39px;
  font: 700 13px/1.5 'Manrope', sans-serif;
  letter-spacing: -0.25px;

  @media (max-width: 520px) {
    min-height: 49px;
    font-size: 11px;
  }
`

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 9px;
  border-top: 1px solid var(--color-border);
`

export const Tags = styled.div`
  display: flex;
  gap: 5px;
  min-width: 0;
  overflow: hidden;

  span {
    padding: 4px 6px;
    border-radius: 3px;
    color: var(--color-muted);
    background: #f0ecf3;
    font-size: 8px;
    white-space: nowrap;
  }

  @media (max-width: 520px) {
    span {
      padding: 4px;
      font-size: 7px;
    }
  }
`

export const YouTubeLink = styled.a`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 9px;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 520px) {
    font-size: 8px;
  }
`
