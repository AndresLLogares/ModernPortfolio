import { css } from 'styled-components';

export const AnimationBox = css`
  @keyframes scale-in-center {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const AnimationSlideOut = css`
  @-webkit-keyframes slide-out-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(1000px);
      transform: translateX(1000px);
      opacity: 0;
    }
  }
  @keyframes slide-out-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(1000px);
      transform: translateX(1000px);
      opacity: 0;
    }
  }
`;

export const AnimationSlideIn = css`
  @-webkit-keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const AnimationText = css`
  @-webkit-keyframes focus-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-800px);
      transform: translateZ(-800px);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes focus-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-800px);
      transform: translateZ(-800px);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
`;
