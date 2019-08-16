import React, { useEffect, createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import Axios from 'axios';

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

const API_HOST_URL = process.env.API_URL;

const ScouterPageO = props => {
  const [state, dispatch] = useImmerReducer(scoutDataReducer, initialState);

  const fetchLocalData = async url => {
    const result = await Axios.get(url);
    const zoneKeys = Object.keys(result.data);
    const zoneData = result.data;

    dispatch({ type: 'fetch', zoneKeys, zoneData });
  };

  const { currentMark, isLoading, zoneData, zoneKeys, mapZone, mapMark, showModal, showLocation } = state;

  useEffect(() => {
    fetchLocalData('/resources/stubs/hunt_data.json');
  }, []);

  useEffect(() => {
    let source = Axios.CancelToken.source();

    const fetchFbData = async url => {
      const histLocation = props.history.location.pathname;
      const cardKey = histLocation.split('/')[1]

      const options = {
        params: {
          uniqueId: cardKey
        }
      };

      const results = await Axios.get(url, options);
      const newScoutData = results.data.newData[cardKey].scoutData;
      const newRouteData = results.data.newData[cardKey].routeData;

      dispatch({
        type: 'card', cardKey: cardKey, scoutData: newScoutData, RouteData: newRouteData, isLoading: false
      });
    }

    fetchFbData(`${API_HOST_URL}/api/scout/`);
    return () => {
      source.cancel();
    }
  }, [showModal]);

  if (!zoneData || !zoneKeys || isLoading) {
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
