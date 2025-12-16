import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #000;
    color: #fff;
    font-family: 'Inter', system-ui, sans-serif;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    margin-bottom: 16px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    margin-left: 16px;
  }

  li {
    margin-bottom: 4px;
  }

  button {
    cursor: pointer;
    border: none;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Visually Hidden/SR-only styles */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Background animations */
  .bg {
    left: -50%;
    right: -50%;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(-60deg, #510101 50%, #181717 50%);
    position: fixed;
    z-index: -1;
    opacity: .7;
    animation: slide 4s ease-in-out infinite alternate;
  }

  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 5s;
  }

  .bg3 {
    animation-duration: 6s;
  }

  /* Animations */
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes slide {
    0% {
      transform: translateX(-20%);
    }
    100% {
      transform: translateX(20%);
    }
  }
`;