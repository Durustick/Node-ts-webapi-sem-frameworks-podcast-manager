import styled from 'styled-components'

export const BrandName = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font: 800 22px 'Manrope', sans-serif;
  letter-spacing: -1.3px;
`

export const BrandMark = styled.span`
  display: grid;
  place-items: center;
  width: 29px;
  height: 29px;
  border-radius: 9px;
  color: var(--color-purple-dark);
  background: var(--color-purple-soft);
`

export const BrandPeriod = styled.span`
  margin-left: -8px;
  color: var(--color-purple);
`

export const TopBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 82px;
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 520px) {
    height: 67px;
  }
`

export const TopNote = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--color-muted);
  font-size: 11px;

  @media (max-width: 520px) {
    display: none;
  }
`

export const LiveDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-purple);
  box-shadow: 0 0 0 4px var(--color-purple-soft);
`
