import React from 'react';
import { Video, Wrapper } from '../../styles/Layout/index';
import GlobalStyle from '../../styles/Global';

const Layout = (props: any) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Video
        autoPlay
        loop
        muted>
        <source
          src={
            'https://res.cloudinary.com/andreslogares/video/upload/v1664058995/Orange_online-video-cutter.com_qdhull.mp4'
          }
          type="video/mp4"
        />
      </Video>
      {props.children}
    </Wrapper>
  );
};

export default Layout;
