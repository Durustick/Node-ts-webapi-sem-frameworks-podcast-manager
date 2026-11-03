import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 7.3%;

  @media (max-width: 800px) {
    padding: 0 5%;
  }

  @media (max-width: 520px) {
    padding: 0 20px;
  }
`

export const CatalogSection = styled.section`
  padding: 46px 0 34px;

  @media (max-width: 520px) {
    padding-top: 35px;
  }
`

export const SectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h2 {
    margin: 10px 0 0;
    font: 700 27px 'Manrope', sans-serif;
    letter-spacing: -1px;
  }

  h2 span {
    color: var(--color-purple);
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 23px;
    }
  }

  @media (max-width: 520px) {
    align-items: flex-end;

    h2 {
      max-width: 260px;
      font-size: 20px;
      line-height: 1.3;
    }
  }
`

export const SectionEyebrow = styled.div`
    color: var(--color-muted);
  font-size: 8px;
  letter-spacing: 1.4px;
`

export const EpisodeCount = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 4px;

  strong {
    font: 600 25px 'Manrope', sans-serif;
    letter-spacing: -1px;
  }

  span {
    color: var(--color-muted);
    font-size: 9px;
    line-height: 1.5;
  }

  @media (max-width: 520px) {
    strong {
      font-size: 20px;
    }

    span {
      font-size: 8px;
    }
  }
`
