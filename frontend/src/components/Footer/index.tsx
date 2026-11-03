import { AudioLines } from 'lucide-react'
import { BrandMark, BrandName, BrandPeriod, FooterContainer } from './styles'

function Footer() {
  return <FooterContainer><BrandName><BrandMark><AudioLines size={16} /></BrandMark>escuta<BrandPeriod>.</BrandPeriod></BrandName><span>Boas histórias merecem ser ouvidas.</span><a >Ouça e relaxe🎧</a></FooterContainer>
}

export default Footer
