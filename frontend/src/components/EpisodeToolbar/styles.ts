import styled from 'styled-components'

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin: 24px 0 20px;

  @media (max-width: 520px) {
    gap: 8px;
    margin: 19px 0 16px;
  }
`

export const SearchBox = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  max-width: 520px;
  height: 43px;
  padding: 0 13px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--color-muted);
  background: var(--color-surface);

  input {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: 0;
    color: var(--color-ink);
    background: transparent;
    font: 400 11px 'DM Sans', sans-serif;
  }

  input::placeholder {
    color: #a49baa;
  }

  @media (max-width: 520px) {
    gap: 7px;
    padding: 0 9px;

    input {
      font-size: 10px;
    }
  }
`

export const FilterBox = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 43px;
  padding: 0 11px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--color-muted);
  background: var(--color-surface);
  font-size: 10px;

  select {
    max-width: 140px;
    border: 0;
    outline: 0;
    color: var(--color-ink);
    background: transparent;
    font: 600 10px 'DM Sans', sans-serif;
    cursor: pointer;
  }

  @media (max-width: 520px) {
    gap: 5px;
    padding: 0 8px;

    span {
      display: none;
    }

    select {
      max-width: 104px;
      font-size: 9px;
    }
  }
`

export const ClearButton = styled.button`
  padding: 0 13px;
  border: 1px solid #d8c5ed;
  border-radius: 6px;
  color: var(--color-purple-dark);
  background: var(--color-purple-soft);
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: var(--color-purple-pale);
  }

  &:focus-visible {
    outline: 2px solid var(--color-purple);
    outline-offset: 2px;
  }
`
