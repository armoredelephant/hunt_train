import React from 'react';
import styled from 'styled-components';

import MainContainerA from '@A/00-containers/MainContainerA';
import ContentContainerA from '@A/00-containers/ContentContainerA';

import SplashHeaderA from '@A/01-headers/SplashHeaderA';

const SplashPageO = props => {
  return (
    <MainContainerA className='darken'>
      <ContentContainerA>
        <SplashHeaderA>Hi</SplashHeaderA>
      </ContentContainerA>
    </MainContainerA>
  );
};

export default SplashPageO;