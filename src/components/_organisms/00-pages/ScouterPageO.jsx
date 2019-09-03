import React, { useEffect, useContext } from 'react';
import Axios from 'axios';
import firebase from 'firebase/app';

import 'firebase/database';

import { DispatchContext, StateContext } from '../../../App';

import MainContainerA from '@A/00-containers/MainContainerA';
import ZoneCardM from '@M/00-forms/ZoneCardM';
import ModalContainerA from '@A/00-containers/ModalContainerA';
import TrainCardM from '@M/01-card_items/TrainCardM';
import ModalManagerM from '@M/04-utils/ModalManagerM';

const ScouterPageO = props => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { zoneData, zoneKeys, showModal } = state;

  const fbDatabase = firebase.database();
  const histLocation = props.history.location.pathname;
  const cardKey = histLocation.split('/')[1]
  const cardRef = fbDatabase.ref(`cards/${cardKey}`)

  // Fetches the card data in realtime

  // useEffect(() => {
  //   const dataListener = async url => {
  //     const options = {
  //       params: {
  //         key: cardKey
  //       }
  //     }
  //     const result = await Axios.get(url, options);
  //     if (result) {
  //       const cardData = result.data.cardData;
  //       const keys = result.data.cardKeys;
  //       dispatch({ type: 'sdFetch', newData: cardData, scoutedZoneKeys: keys });
  //     }
  //   }
  //   dataListener(`${API_HOST_URL}/api/scout/on`);
  //   return () => {
  //     dataListener(`${API_HOST_URL}/api/scout/off`);
  //   }
  // })

  useEffect(() => {
    const onChange = snapshot => {
      let keys;
      if (snapshot.val()) {
        keys = Object.keys(snapshot.val());
        dispatch({ type: 'sdFetch', newData: snapshot.val(), scoutedZoneKeys: keys });
      }
    }

    cardRef.on('child_changed', onChange)
    return () => {
      cardRef.off('child_changed', onChange);
    }
  });

  const fetchLocalData = async url => {
    const result = await Axios.get(url);
    const zoneKeys = Object.keys(result.data);
    const zoneData = result.data;

    dispatch({ type: 'fetch', zoneKeys, zoneData });
  };

  useEffect(() => {
    dispatch({ type: 'updateKey', cardKey: cardKey });
    fetchLocalData('/resources/stubs/hunt_data.json');
    // this call is used to fetch once, so it will initially grab the scoutData and set once
    cardRef.once('value', snapshot => {
      let snap = snapshot.val();
      dispatch({ type: 'sdFetch', newData: snap.scoutData, scoutedZoneKeys: Object.keys(snap.scoutData) });
    });
  }, []);

  if (!zoneData || !zoneKeys) {
    return null;
  }

  return (
    <>
      <MainContainerA>
        <TrainCardM />
        {zoneKeys.map(item => {
          const rdmKey = Math.random()
            .toString(36)
            .substring(7);
          return (
            <ZoneCardM // prettier-ignore
              key={rdmKey}
              marks={zoneData[item].marks}
              zone={zoneData[item].zone}
            />
          );
        })}
      </MainContainerA>
      {showModal && (
        <ModalContainerA>
          <ModalManagerM />
        </ModalContainerA>
      )}
    </>
  );
};

export default ScouterPageO;
