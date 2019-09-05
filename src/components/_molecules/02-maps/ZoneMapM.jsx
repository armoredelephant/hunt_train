import React, { useContext } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
// import firebase from 'firebase/app';
// import 'firebase/database';

const API_HOST_URL = process.env.API_URL;

import { StateContext, DispatchContext } from '../../../App';

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

  const { cardKey, mapZone, mapMark, markCoords, mapInstance } = state;

  const handleCoords = e => {
    e.preventDefault();

    const { target } = e;

    const splitString = target.title.split(' | ');

    const coords = splitString[0];
    const distance = parseFloat(splitString[1]);

    const markData = {
      coords,
      distance,
      instance: mapInstance + 1,
      mark: mapMark,
      zone: mapZone
    };

    const options = {
      cardKey: cardKey,
      instance: mapInstance,
      map: mapZone,
      mark: markData,
    };

    const axiosPost = async url => {
      await Axios.post(url, options).then(res => { console.log(res.data.message) });
    }
    // Axios.post(`${API_HOST_URL}/api/scout/firstMark`, options);

    axiosPost(`${API_HOST_URL}/api/scout/firstMark`)
    dispatch({ type: 'modal' });
  };

  // const handleCoords = e => {
  //   e.preventDefault();

  //   const { target } = e;

  //   const splitString = target.title.split(' | ');

  //   const coords = splitString[0];
  //   const distance = parseFloat(splitString[1]);

  //   const markData = {
  //     coords,
  //     distance,
  //     instance: mapInstance + 1,
  //     mark: mapMark,
  //     zone: mapZone
  //   };

  //   const fbDatabase = firebase.database();
  //   const ref = fbDatabase.ref().child(`cards/${cardKey}/scoutData/${mapZone}/${mapInstance}`);

  //   ref.once('value', snapshot => {
  //     let refKeys = [];
  //     // if no there is no data for the instance, create a new key and update with the key/data
  //     if (!snapshot.val()) {
  //       const newChildKey = ref.push().key;
  //       const updates = {
  //         [`/${newChildKey}`]: markData
  //       };

  //       return ref.update(updates);
  //     } else {
  //       // grab all keys
  //       snapshot.forEach(child => {
  //         refKeys.push(child.key)
  //       })
  //       // loop through the keys to see if mark already has a key
  //       let filteredKeys = refKeys.filter(key => {
  //         return snapshot.val()[key].mark === mapMark
  //       });

  //       if (filteredKeys.length !== 0) {
  //         // if there is a key containing the current mark, we are replacing it.
  //         const keyRef = fbDatabase.ref().child(`cards/${cardKey}/scoutData/${mapZone}/${mapInstance}/${filteredKeys[0]}`);
  //         return keyRef.update(markData)
  //       } else {
  //         // if no key contains the current mark, then create a new key and update.
  //         const newChildKey = ref.push().key;
  //         const updates = {
  //           [`/${newChildKey}`]: markData
  //         };
  //         return ref.update(updates);
  //       }
  //     }
  //   })
  //   dispatch({ type: 'modal' });
  // };

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
