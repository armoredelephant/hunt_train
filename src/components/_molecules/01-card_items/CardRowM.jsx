import React from 'react';
import styled from 'styled-components';

import RowContainerA from '@A/00-containers/RowContainerA';
import InstanceContainerA from '@A/00-containers/InstanceContainerA';
import ZoneMarkContainerA from '@A/00-containers/ZoneMarkContainerA';


const Mark = styled.h4`
    color: ${props => props.theme.fntClr};
`;

const CardRowM = props => {
    const { mark, zone } = props
    const instances = [1, 2, 3];

    return (
        <RowContainerA>
            <ZoneMarkContainerA>
                <Mark>{mark}</Mark>
            </ZoneMarkContainerA>
            <InstanceContainerA>
                {instances.map(instance => {
                    const rdmKey = Math.random()
                        .toString(36)
                        .substring(7);
                    return <MapperM
                        instance={instance}
                        key={rdmKey}
                        mark={mark}
                        zone={zone} />
                })}
                {/** Selected coordinates top */}
                {/** Map button to select coordinates bottom */}
            </InstanceContainerA>
        </RowContainerA>
    );
};

export default CardRowM;