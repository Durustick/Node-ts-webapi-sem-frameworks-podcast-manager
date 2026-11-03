import styled from 'styled-components'

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  height: 375px;
  overflow: hidden;
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 520px) {
    align-items: flex-start;
    height: 350px;
    padding-top: 58px;
  }
`

export const HeroCopy = styled.div`
  position: relative;
  z-index: 2;
  margin-top: -4px;

  h1 {
    margin: 18px 0 12px;
    font: 700 clamp(39px, 5.1vw, 62px) / 1.08 'Manrope', sans-serif;
    letter-spacing: -3px;
  }

  h1 span {
    color: var(--color-purple);
  }

  p {
    max-width: 350px;
    margin: 0;
    color: var(--color-muted);
    font-size: 13px;
    line-height: 1.8;
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 46px;
    }

    p {
      max-width: 270px;
      font-size: 12px;
    }
  }
`

export const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: var(--color-muted);
  font: 700 9px 'DM Sans', sans-serif;
  letter-spacing: 1.5px;
`

export const HeroArt = styled.div`
  position: absolute;
  top: 14px;
  right: 9%;
  display: grid;
  place-items: center;
  width: 380px;
  height: 330px;

  @media (min-width: 1200px) {
    right: 14%;
  }

  @media (max-width: 800px) {
    right: -75px;
    opacity: 0.6;
  }

  @media (max-width: 520px) {
    top: 120px;
    right: -79px;
    width: 230px;
    height: 230px;
    opacity: 0.28;
  }
`

export const Orbit = styled.span<{ $size: number; $dashed?: boolean }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border: 1px ${({ $dashed }) => ($dashed ? 'dashed' : 'solid')} #e5daef;
  border-radius: 50%;

  @media (max-width: 520px) {
    width: ${({ $size }) => Math.round($size * 0.76)}px;
    height: ${({ $size }) => Math.round($size * 0.76)}px;
  }
`

export const ArtDisc = styled.div`
  display: grid;
  place-items: center;
  width: 174px;
  height: 174px;
  border-radius: 50%;
  color: #f8f2ff;
  background: linear-gradient(145deg, #a26ade, #7133b6);
  box-shadow: 0 20px 54px #733ab645;
  transform: rotate(-15deg);

  @media (max-width: 520px) {
    width: 130px;
    height: 130px;
  }
`

export const DiscInner = styled.div`
  display: grid;
  place-items: center;
  width: 130px;
  height: 130px;
  border: 1px solid #e8d8fa80;
  border-radius: 50%;

  @media (max-width: 520px) {
    width: 100px;
    height: 100px;
  }
`

export const FloatingNote = styled.span<{ $position: 'top' | 'bottom' }>`
  position: absolute;
  color: #9657d2;
  font: 500 ${({ $position }) => ($position === 'top' ? 36 : 27)}px 'Manrope', sans-serif;

  ${({ $position }) => ($position === 'top'
    ? 'top: 58px; right: 75px; transform: rotate(13deg);'
    : 'bottom: 49px; left: 68px; transform: rotate(-12deg);')}
`

export const ArtLabel = styled.span`
  position: absolute;
  right: 7px;
  bottom: 44px;
  color: var(--color-muted);
  font-size: 8px;
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: 1px;
`

export const HeroIndex = styled.div`
  position: absolute;
  right: 0;
  bottom: 20px;
  color: var(--color-muted);
  font-size: 10px;

  span {
    padding: 0 6px;
    color: #b293dc;
  }

  @media (max-width: 520px) {
    bottom: 14px;
  }
`
