import { css } from '@emotion/react';
import { Common } from './emotion';

const GlobalStyle = css`
  * {
    margin: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body {
    font-family: ${Common.font.default};
    font-weight: 400;
    font-size: 16px;
    color: ${Common.color.default};
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
  }
  a,
  em {
    font-style: normal;
    text-decoration: none;
    color: #333;
  }
  ul,
  li {
    list-style: none;
    text-decoration: none;
  }
  img {
    display: block;
  }
  span:focus,
  button:focus,
  input:focus {
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    font-size: 14px;
  }

  // antd
  .ant-btn-reset {
    width: 100%;
    border: none;
    height: auto;
    padding: 0;
  }
  .ant-form-item {
    margin-bottom: 16px;
  }
  .ant-input-wrapper {
    height: 40px;
  }
  .form-input {
    height: 40px;
    &::placeholder {
      font-size: 14px;
    }
    &:hover,
    &:active,
    &:focus-within {
      border: 1px solid ${Common.color.point};
    }
  }
  .phone-input input {
    height: 40px;
  }
  .ant-input-group .ant-input-group-addon .ant-select-focused .ant-select-selector {
    color: ${Common.color.default};
  }
`;

export default GlobalStyle;
