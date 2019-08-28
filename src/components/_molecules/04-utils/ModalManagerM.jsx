import React, { useContext } from 'react';
import { StateContext } from '../../../App';

import ShareContainerA from '@A/00-containers/ShareContainerA';
import MarkLocationMapM from '@M/02-maps/MarkLocationMapM';
import ZoneMapM from '@M/02-maps/ZoneMapM';


const ModalManagerM = () => {
    const state = useContext(StateContext);
    const { cardKey, currentMark, mapZone, mapMark, modalType } = state;

    switch (modalType) {
        case 'shared': {
            return <ShareContainerA url={cardKey} />
        };
        case 'location': {
            return <MarkLocationMapM currentMark={currentMark} />
        }
        case 'map': {
            return <ZoneMapM mapZone={mapZone} mapMark={mapMark} />
        }
        // Need to add case 'guide': {} for the guide. Possibly move to SplashPage?
        default: {
            return null;
        }
    }
};

export default ModalManagerM;