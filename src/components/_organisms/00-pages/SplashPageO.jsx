import React from 'react';
import Axios from 'axios';

import SplashContainerA from '@A/00-containers/SplashContainerA';
import ContentContainerA from '@A/00-containers/ContentContainerA';

import SplashHeaderA from '@A/01-headers/SplashHeaderA';
import TextContainerA from '@A/00-containers/TextContainerA';
import ThemedButtonA from '@A/02-buttons/ThemedButtonA';

const API_HOST_URL = process.env.API_URL;

const paragraph = '';

/**
 * axios.post()
 */

/** axios.post() 
 * on the backend this will generate a new card based on fb_example.json
 * will return a crypto key
 * key will be passed as destination /key
 * key will be require by ScoutPageO
 */


const SplashPageO = props => {
  const handleNew = () => {
    Axios.post(`${API_HOST_URL}/api/scout/new`)
      .then(res => {
        let path = res.data.uniqueId;
        props.history.push(path);
      });
  }
  return (
    <SplashContainerA className="darken">
      <ContentContainerA>
        <SplashHeaderA>Welcome to Hunt Conductor</SplashHeaderA>
        <TextContainerA text={paragraph} />
        <ThemedButtonA // prettier-ignore
          // destination="/scouter"
          handleClick={handleNew}
          text="Start a Train"
        />
        {/** Button that prompts for key, then destination is /key. ScouterPage will query the key for available data */}
      </ContentContainerA>
    </SplashContainerA>
  );
};

export default SplashPageO;
