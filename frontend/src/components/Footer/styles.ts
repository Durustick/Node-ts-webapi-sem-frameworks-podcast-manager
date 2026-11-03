import styled from 'styled-components'
import { BrandName, BrandMark, BrandPeriod } from '../Header/styles'

export { BrandMark, BrandName, BrandPeriod }
export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 65px;
  border-top: 1px solid var(--color-border);
  color: var(--color-muted);
  font-size: 9px;

  ${BrandName} {
    color: var(--color-ink);
    font-size: 16px;
  }

  ${BrandMark} {
    width: 23px;
    height: 23px;
    border-radius: 7px;
  }

  ${BrandPeriod} {
    margin-left: -7px;
  }

  > a:last-child {
    color: var(--color-purple-dark);
  }

  @media (max-width: 520px) {
    min-height: 60px;

    > span {
      display: none;
    }
  }
`
