import React, { useEffect, createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import Axios from 'axios';

import MainContainerA from '@A/00-containers/MainContainerA';
import ZoneCardM from '@M/00-forms/ZoneCardM';

import ModalContainerA from '@A/00-containers/ModalContainerA';
import ZoneMapM from '@M/02-maps/ZoneMapM';

const initialState = {
    scoutData: {},
    zoneKeys: null,
    zoneData: null,
    markCoords: [],
    showModal: false,
};

const scoutDataReducer = (draft, action) => {
    switch (action.type) {
        case 'fetch': {
            draft.zoneKeys = action.zoneKeys;
            draft.zoneData = action.zoneData;
            return;
        };
        case 'scout': { // refactor
            draft.scoutData[action.zone][action.mark].coords = action.coords;
            draft.scoutData[action.zone][action.mark].distance = action.distance;
            return;
        };
        case 'map': {
            draft.showModal = !draft.showModal;
            draft.mapZone = action.zone;
            draft.mapMark = action.mark;
            draft.markCoords = action.markCoords;
            draft.mapInstance = action.instance;
            return;
        };
        case 'coords': {
            draft.markCoords = action.markCoords
            return;
        }
        case 'modal': {
            draft.showModal = false;
            draft.mapZone = '';
            draft.mapMark = '';
        };
        default:
            break;
    };
};

export const DispatchContext = createContext();
export const StateContext = createContext();

const ScouterPageO = () => {
    const [state, dispatch] = useImmerReducer(scoutDataReducer, initialState);
    const { zoneData, zoneKeys, scoutData, mapZone, mapMark, showModal } = state;

    const fetchData = async url => {
        const result = await Axios.get(url);
        const zoneKeys = Object.keys(result.data);
        const zoneData = result.data;

        dispatch({ type: 'fetch', zoneKeys: zoneKeys, zoneData: zoneData })
    }

    useEffect(() => {
        fetchData('/resources/stubs/hunt_data.json');
    }, []);

    if (!zoneData || !zoneKeys) {
        return null;
    } else {
        return (
            <DispatchContext.Provider value={dispatch}>
                <StateContext.Provider value={state}>
                    <MainContainerA>
                        {zoneKeys.map(item => {
                            const rdmKey = Math.random()
                                .toString(36)
                                .substring(7);
                            return (
                                <ZoneCardM
                                    key={rdmKey}
                                    marks={zoneData[item].marks}
                                    zone={zoneData[item].zone} />
                            )
                        })}
                    </MainContainerA>
                    {(showModal && mapZone) &&
                        <ModalContainerA>
                            <ZoneMapM mapZone={mapZone} mapMark={mapMark} />
                        </ModalContainerA>
                    }
                </StateContext.Provider>
            </DispatchContext.Provider>
        );
    }
};

export default ScouterPageO;