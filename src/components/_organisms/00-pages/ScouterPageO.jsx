import React, { useEffect, createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import Axios from 'axios';
import firebase from 'firebase';

import 'firebase/database';

import MainContainerA from '@A/00-containers/MainContainerA';
import ZoneCardM from '@M/00-forms/ZoneCardM';
import ModalContainerA from '@A/00-containers/ModalContainerA';
import ZoneMapM from '@M/02-maps/ZoneMapM';
import MarkLocationMapM from '@M/02-maps/MarkLocationMapM';
import TrainCardM from '@M/01-card_items/TrainCardM';

// state management
import initialState from 'Utils/initialState';
import scoutDataReducer from 'Utils/scoutDataReducer';

// context
export const DispatchContext = createContext();
export const StateContext = createContext();

const ScouterPageO = props => {
  const [state, dispatch] = useImmerReducer(scoutDataReducer, initialState);
  const { currentMark, zoneData, zoneKeys, mapZone, mapMark, showModal, showLocation } = state;

  const fbDatabase = firebase.database();
  const histLocation = props.history.location.pathname;
  const cardKey = histLocation.split('/')[1]
  const cardRef = fbDatabase.ref(`cards/${cardKey}`)

  useEffect(() => {
    const onChange = snapshot => {
      let keys;
      if (snapshot.val()) {
        keys = Object.keys(snapshot.val());
        console.log(keys)
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
    dispatch({ type: 'updateKey', key: cardKey });
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
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
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
            {showLocation ?
              <MarkLocationMapM
                currentMark={currentMark}
              /> :
              <ZoneMapM mapZone={mapZone} mapMark={mapMark} />
            }
          </ModalContainerA>
        )}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default ScouterPageO;
