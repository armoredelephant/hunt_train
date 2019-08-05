import React from 'react';
import styled from 'styled-components';

import RowContainerA from '@A/00-containers/RowContainerA';
import InstanceContainerA from '@A/00-containers/InstanceContainerA';
import ZoneMarkContainerA from '@A/00-containers/ZoneMarkContainerA';

import MapperM from '@M/01-card_items/MapperM';

const Mark = styled.h4`
    color: ${props => props.theme.fntClr};
`;

const CardRowM = props => {
    const { mark, zone } = props
    const instances = [1, 2, 3];

    // will receive coordinate state for specific mark from Reducer

    /** needs state for selected coordinates
     * selected cordinates from MapperM will need to update the state
     * or receive new state from reducer? 
     */



    return (
        <RowContainerA>
            <ZoneMarkContainerA>
                <Mark>{mark}</Mark>
            </ZoneMarkContainerA>
            <InstanceContainerA>
                {/* {instances.map(instance => {
                    const rdmKey = Math.random()
                        .toString(36)
                        .substring(7);
                    return <MapperM
                        instance={instance}
                        key={rdmKey}
                        mark={mark}
                        zone={zone} />
                })} */}
                {/** Selected coordinates top */}
                {/** Map button to select coordinates bottom */}
            </InstanceContainerA>
        </RowContainerA>
    );
};

export default CardRowM;