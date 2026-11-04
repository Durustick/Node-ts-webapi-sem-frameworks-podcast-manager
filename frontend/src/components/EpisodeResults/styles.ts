import styled from 'styled-components'

export const EpisodeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 17px;

  @media (min-width: 1200px) {
    gap: 20px;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 25px;
  }

  @media (max-width: 520px) {
    gap: 20px 12px;
  }
`

export const StatusMessage = styled.p<{ $error?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 170px;
  margin: 0;
  color: ${({ $error }) => ($error ? '#6b5c48' : 'var(--color-muted)')};
  font-size: 12px;
`

export const Banner = styled.aside`
  display: flex;
  align-items: center;
  gap: 13px;
  min-height: 61px;
  margin-top: 25px;
  padding: 12px 16px;
  border-radius: 6px;
  background: #eee6f8;

  > div:nth-child(2) {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
  }

  > div:nth-child(2) span {
    color: var(--color-purple-dark);
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  strong {
    font: 600 11px 'Manrope', sans-serif;
  }

  @media (max-width: 520px) {
    gap: 9px;
    padding: 10px;

    strong {
      font-size: 9px;
    }

    > div:nth-child(2) span {
      font-size: 6px;
    }
  }
`

export const BannerIcon = styled.span`
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: var(--color-purple-dark);
  background: #dfceef;
`
