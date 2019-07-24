import React from 'react';

import MainContainerA from '@A/00-containers/MainContainerA';
import ContentContainerA from '@A/00-containers/ContentContainerA';

import SplashHeaderA from '@A/01-headers/SplashHeaderA';
import TextContainerA from '@A/00-containers/TextContainerA';
import ThemedButtonA from '@A/02-buttons/ThemedButtonA';

const paragraph = 'This app was designed to make the scouting and conducting of a hunt train easier.'

const SplashPageO = props => {
  return (
    <MainContainerA className='darken'>
      <ContentContainerA>
        <SplashHeaderA>Welcome to Hunt Train</SplashHeaderA>
        <TextContainerA text={paragraph} />
        <ThemedButtonA  // prettier-ignore 
          destination={'/scouter'}
          text={'Start Scouting'} />
      </ContentContainerA>
    </MainContainerA>
  );
};

export default SplashPageO;