import { AudioLines, Sparkles } from 'lucide-react'
import {
  ArtDisc,
  ArtLabel,
  DiscInner,
  Eyebrow,
  FloatingNote,
  HeroArt,
  HeroCopy,
  HeroSection,
  Orbit,
} from './styles'

function Hero() {
  return (
    <HeroSection id="inicio">
      <HeroCopy>
        <Eyebrow>
          <Sparkles size={13} /> SEU PRÓXIMO PLAY COMEÇA AQUI
        </Eyebrow>
        <h1>
          Conversas que<br />
          ficam com <span>você.</span>
        </h1>
        <p>Ideias, histórias e pessoas incríveis. Encontre o episódio que combina com o seu momento.</p>
      </HeroCopy>
      <HeroArt aria-hidden="true">
        <Orbit $size={290} />
        <Orbit $size={220} $dashed />
        <ArtDisc>
          <DiscInner><AudioLines size={55} strokeWidth={1.2} /></DiscInner>
        </ArtDisc>
        <FloatingNote $position="top">♪</FloatingNote>
        <FloatingNote $position="bottom">♫</FloatingNote>
        <ArtLabel>DÊ O PLAY<br />NO QUE IMPORTA</ArtLabel>
      </HeroArt>
    </HeroSection>
  )
}

export default Hero
