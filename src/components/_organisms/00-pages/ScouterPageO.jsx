import React, { useEffect, createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import Axios from 'axios';

import MainContainerA from '@A/00-containers/MainContainerA';
import ZoneCardM from '@M/00-forms/ZoneCardM';

const initialState = {
    scoutData: {},
    zoneKeys: null,
    zoneData: null,
};

const scoutDataReducer = (draft, action) => {
    switch (action.type) {
        case 'keys': {
            draft.zoneKeys = action.keys;
            return;
        };
        case 'fetch': {
            draft.zoneData = action.zoneData;
            return;
        };
        case 'scout': {
            draft.scoutData[action.zone][action.mark].coords = action.coords;
            draft.scoutData[action.zone][action.mark].distance = action.distance;
            return;
        };
        default:
            return state;
    };
};

const DispatchContext = createContext();
const StateContext = createContext();

const ScouterPageO = () => {
    const [state, dispatch] = useImmerReducer(scoutDataReducer, initialState);
    const { zoneData, zoneKeys, scoutData } = state;

    const fetchData = async url => {
        const result = await Axios.get(url);
        const zoneKeys = Object.keys(result.data);
        const zoneData = result.data;

        dispatch({ type: 'keys', keys: zoneKeys })
        dispatch({ type: 'fetch', zoneData: zoneData });
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
                </StateContext.Provider>
            </DispatchContext.Provider>
        );
    }
};

export default ScouterPageO;