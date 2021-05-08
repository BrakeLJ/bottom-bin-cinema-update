import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  --white: #fff;
  --black: #000;
  --color-background: #f0f0f0;
  --color-border: #dfe3e8;

  --color-primary: #2941AB;
  --color-primary-dark: #080D21;
  --color-primary-border: #142052;
  --color-primary-light: #CED5F3;

  --color-secondary: #1ED760;

  --color-accent: #CC3E28;

  --color-text: #222;
  --font-body: 'Oswald', sans-serif;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  line-height: 1.15;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body,
p,
h1,
h2,
h3,
h4,
h5,
h6 ul,
span {
  margin: 0;
  padding: 0;
}

ul, ol, li {
  list-style: none;
}

body {
  font-family: var(--font-body);
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-text);
  height: 100vh;
  background: var(--color-secondary);
}

img {
  width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: var(--color-text);
}

.wrapper {
  width: 85%;
  max-width: 1250px;
  margin: 0 auto;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
