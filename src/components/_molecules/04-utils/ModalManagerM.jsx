import React, { useContext } from 'react';
import { StateContext } from '../../../App';

import ShareContainerA from '@A/00-containers/ShareContainerA';
import MarkLocationMapM from '@M/02-maps/MarkLocationMapM';
import LogInFormM from '@M/00-forms/LogInFormM';
import ZoneMapM from '@M/02-maps/ZoneMapM';
import { tsPropertySignature } from '@babel/types';


const ModalManagerM = props => {
    const state = useContext(StateContext);
    const { cardKey, currentMark, mapZone, mapMark, modalType } = state;
    const { history } = props;

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
        case 'auth': {
            return <LogInFormM history={history} />
        }
        // Need to add case 'guide': {} for the guide. Possibly move to SplashPage?
        default: {
            return null;
        }
    }
};

export default ModalManagerM;