import { css, createGlobalStyle } from 'styled-components'

import * as colors from './colors'
import latoRegular from '../../../static/fonts/Lato-Regular.ttf' //Regular
import latoLight from '../../../static/fonts/Lato-Light.ttf' //Light
import latoHairline from '../../../static/fonts/Lato-Hairline.ttf'   //HairLine

const selection = (color: string) => css`
  background: ${color};
  color: white;
`

// tslint:disable
export const BaseStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Inconsolata');
  @import url('https://fonts.googleapis.com/css?family=Zilla+Slab:300,400,600');

  @font-face {
    font-family: 'Lato';
    font-weight: 700;
    font-style: normal;
    src: url(${latoLight}) format('truetype');
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 400;
    font-style: normal;
    src: url(${latoRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 300;
    font-style: normal;
    src: url(${latoHairline}) format('truetype');
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  ::-moz-selection {
    ${selection(colors.link)}
  }

  ::selection {
    ${selection(colors.link)}
  }

  .icon-link {
    display: none;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', Helvetica, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.62;
    letter-spacing: -0.005em;
    background: white;
  }

  body {
    color: transparent;
  }

  body > *, #root {
    color: ${colors.text};
  }

  html, body, #root {
    height: 100vh;
    min-height: 100vh;
  }

  body.with-overlay,
  body.with-overlay #root {
    overflow: hidden;
  }

  a, a:visited, a:active {
    text-decoration: none;
    color: ${colors.link};
  }

  a:hover {
    color: ${colors.link};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: color 9999s ease-out, background-color 9999s ease-out;
    transition-delay: 9999s;
  }

  input:required,
  input:invalid {
    box-shadow: none;
  }

  button:focus {
    outline: none !important;
  }

  select {
    color: ${colors.text};
  }

  pre, code {
    font-family: 'Inconsolate', monospace;
  }
`
