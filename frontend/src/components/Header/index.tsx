import { AudioLines } from 'lucide-react'
import { BrandMark, BrandName, BrandPeriod, LiveDot, TopBar, TopNote } from './styles'

function Header() {
  return (
    <TopBar>
      <BrandName>
        <BrandMark><AudioLines size={19} strokeWidth={2.4} /></BrandMark>
        escuta<BrandPeriod>.</BrandPeriod>
      </BrandName>
      <TopNote>
        <LiveDot /> uma boa conversa muda o dia
      </TopNote>
    </TopBar>
  )
}

export default Header
