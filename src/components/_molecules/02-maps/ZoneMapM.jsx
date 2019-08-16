import React, { useContext } from 'react';
import styled from 'styled-components';

import { StateContext, DispatchContext } from '@O/00-pages/ScouterPageO';
import Axios from 'axios';

const API_HOST_URL = process.env.API_URL;

const Container = styled.div`
  display: flex;
  align-self: center;
  overflow: auto;
`;

const Image = styled.img`
  min-width: 640px;
  align-self: center;
  min-height: 640px;
`;

const ZoneMapM = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const { cardKey, mapZone, mapMark, markCoords, mapInstance, scoutData } = state;

  const handleCoords = e => {
    e.preventDefault();

    const { target } = e;

    const splitString = target.title.split(' | ');

    const coords = splitString[0];
    const distance = parseFloat(splitString[1]);

    const markData = {
      coords,
      distance,
      instance: mapInstance,
      mark: mapMark,
      zone: mapZone
    };

    const options = {
      cardKey: cardKey,
      instance: mapInstance,
      map: mapZone,
      mark: markData
    };

    const instanceMarks = scoutData[mapZone][mapInstance - 1];
    console.log(scoutData, options);

    if (!instanceMarks) {
      Axios.post(`${API_HOST_URL}/api/scout/newMark`, options)
      dispatch({ type: 'modal' });
    }


    // check if scoutData[mapZone][mapInstance - 1] = false
    // if it's false


    // if (instanceMarks.length !== 0 && distance < instanceMarks[0].distance) {
    /**
     * instead of dispatch()
     * axios.push(/scout/{key_generated_initially_For_Card}/scoutData)
     * back end will then need to navigate to zone/instance and then unshift
     * The conditional will be done on the backend, pass through distance in options
     * will unshift/push on backend.
     */
    //     dispatch({ type: 'markUnshift', mark: markData });
    //   } else {
    //     dispatch({ type: 'markPush', mark: markData });
    //   }
  };

  return (
    <Container>
      <Image // prettier-ignore
        src={`/resources/maps/${mapZone}_${mapMark}.svg`}
        useMap="#zone-map"
      />
      <map name="zone-map">
        {markCoords.map(location => {
          const rdmKey = Math.random()
            .toString(36)
            .substring(7);
          return (
            <area
              alt="mark coordinate"
              coords={location.coords}
              key={rdmKey}
              onClick={handleCoords}
              shape="circle"
              title={`( ${location.x}, ${location.y} ) | ${location.distance}`}
            />
          );
        })}
      </map>
    </Container>
  );
};

export default ZoneMapM;
