import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

  :root {
    --color-page: #f8f6fb;
    --color-surface: #fdfbff;
    --color-ink: #261d30;
    --color-muted: #7e7785;
    --color-border: #e7e1ee;
    --color-purple: #7938c5;
    --color-purple-dark: #5d269e;
    --color-purple-soft: #eee6f8;
    --color-purple-pale: #e4d7f3;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-width: 320px;
    color: var(--color-ink);
    background: var(--color-page);
    font-family: 'DM Sans', sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select {
    font: inherit;
  }
`

export default GlobalStyles
