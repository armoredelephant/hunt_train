import React, { useContext } from 'react';
import { StateContext } from '../../../App';

import ShareContainerA from '@A/00-containers/ShareContainerA';
import MarkLocationMapM from '@M/02-maps/MarkLocationMapM';
import LogoutNotificationA from '@A/03-notifications/LogoutNotificationA';
import PrivacyNotificationA from '@A/03-notifications/PrivacyNotificationA';
import SiteGuideO from '@O/01-modals/SiteGuideO';
import VerificationModalO from '@O/01-modals/VerificationModalO';
import ZoneMapM from '@M/02-maps/ZoneMapM';


const ModalManagerM = props => {
    const state = useContext(StateContext);
    const { cardKey, currentMark, mapZone, mapMark, modalType } = state;

    switch (modalType) {
        case 'shared': {
            return <ShareContainerA text={'Copy'} val={`hunt-conductor.com/${cardKey}`} />
        };
        case 'location': {
            return <MarkLocationMapM currentMark={currentMark} />
        }
        case 'map': {
            return <ZoneMapM mapZone={mapZone} mapMark={mapMark} />
        }
        case 'logout': {
            return <LogoutNotificationA />
        }
        case 'verification': {
            return <VerificationModalO />
        }
        case 'guide': {
            return <SiteGuideO />
        }
        case 'footer': {
            return <PrivacyNotificationA />
        }
        default: {
            return null;
        }
    }
};

export default ModalManagerM;