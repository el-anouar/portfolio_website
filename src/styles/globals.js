import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body{
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button,input,span,li,ul,p{
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  .simple-image {
    padding: 20px 0;
}

.simple-image input {
    width: 100%;
    padding: 10px;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    outline: none;
    font-size: 14px;
}
.simple-image img {
  max-width: 100%;
  margin-bottom: 15px;
}
.simple-image input,
.simple-image [contenteditable] {
  // styles
}
.simple-image.withBorder img {
  border: 1px solid #e8e8eb;
}

.simple-image.withBackground {
  background: #eff2f5;
  padding: 10px;
}

.simple-image.withBackground img {
  display: block;
  max-width: 60%;
  margin: 0 auto 15px;
}
#editorjs {
  background-color: #0f1624; /* Change the background color */
}
.ce-toolbar__plus:hover {
  background-color: #14a9d1;
  svg path {
    color: white;
    
  }
}
.ce-toolbar__plus {
  svg path {
    color: white;
    
  }
}
.ce-toolbar__settings-btn:hover{
  background-color: #14a9d1;
  svg path {
    color: white;
    
  }
}
.ce-popover{
  background-color: #1d2b46;
  border: 1px solid #1c2a46;
}
.cdx-search-field {
  background: rgb(15 22 36);
}
.ce-popover__item:hover:not(.ce-popover__item--no-visible-hover) {
  background-color: #0f1624;
}
.ce-popover__item-icon{
  svg path {
    color: gray;
    
  }
}
.ce-inline-toolbar {
  background-color: #1d2b46;
  border: 1px solid #1d2b46;
}
.ce-inline-toolbar__dropdown:hover {
  background: #0f1624;
}
.ce-inline-tool:hover {
  background-color: #0f1624;
  color: white;
}
.ce-inline-tool{
  color: white;
}
.ce-block--selected .ce-block__content {
  background: #0f1624;
}
.ce-conversion-toolbar {
  background-color: #1d2b46;
  border: 1px solid #1d2b46;
}
.ce-conversion-tool:hover {
  background: #0f1624;
}
.ce-conversion-tool__icon{
  svg path {
    color: gray;
    
  }
}
.ce-inline-tool--active {
  background-color: #0f1624;
}
.ce-conversion-tool--focused {
  background: transparent!important;
}
`;

export default GlobalStyles;