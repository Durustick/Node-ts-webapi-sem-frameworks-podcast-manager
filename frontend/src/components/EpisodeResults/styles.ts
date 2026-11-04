import styled, { keyframes } from 'styled-components'

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

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Notice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 170px;
  color: var(--color-muted);
  font-size: 12px;

  strong {
    color: var(--color-ink);
    font: 600 13px 'Manrope', sans-serif;
  }

  p {
    margin: 5px 0 0;
    color: var(--color-muted);
    font-size: 11px;
  }
`

export const ErrorNotice = styled(Notice)`
  color: #6b5c48;
`

export const NoticeIcon = styled.span`
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #f3eaf9;
`

export const EmptyNotice = styled(Notice)`
  flex-direction: column;
  gap: 6px;

  p {
    margin: 0;
  }
`

export const Spinner = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid #e6dcf0;
  border-top-color: var(--color-purple);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
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
