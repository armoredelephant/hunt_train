import React, { useEffect, createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import Axios from 'axios';

import MainContainerA from '@A/00-containers/MainContainerA';
import ZoneCardM from '@M/00-forms/ZoneCardM';
import ModalContainerA from '@A/00-containers/ModalContainerA';
import ZoneMapM from '@M/02-maps/ZoneMapM';
import TrainCardM from '@M/01-card_items/TrainCardM';

// state management
import initialState from 'Utils/initialState';
import scoutDataReducer from 'Utils/scoutDataReducer';

// context
export const DispatchContext = createContext();
export const StateContext = createContext();

const ScouterPageO = () => {
  const [state, dispatch] = useImmerReducer(scoutDataReducer, initialState);
  const { zoneData, zoneKeys, mapZone, mapMark, showModal } = state;

  const fetchData = async url => {
    const result = await Axios.get(url);
    const zoneKeys = Object.keys(result.data);
    const zoneData = result.data;

    dispatch({ type: 'fetch', zoneKeys, zoneData });
  };

  useEffect(() => {
    fetchData('/resources/stubs/hunt_data.json');
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
              <ZoneCardM key={rdmKey} marks={zoneData[item].marks} zone={zoneData[item].zone} />
            );
          })}
        </MainContainerA>
        {showModal && mapZone && (
          <ModalContainerA>
            <ZoneMapM mapZone={mapZone} mapMark={mapMark} />
          </ModalContainerA>
        )}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default ScouterPageO;
