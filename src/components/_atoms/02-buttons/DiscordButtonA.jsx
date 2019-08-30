import React, { useContext, useEffect } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import { StateContext, DispatchContext } from '../../../App';
import discordSwitch from 'Utils/discordSwitch';

import { discordConfig } from 'Utils/discordConfig';

import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.button`
display: flex;
align-self: center;
    color: #7289DA;
    background-color: ${props => props.theme.cardbg};
    border: none;
    padding: 0;
    outline: none;

    &:active {
        color: #6E87D8;
    }
`;

const DiscordButtonA = () => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const { currentStop, datacenter, dataCenterURL, routeData, world } = state;

    useEffect(() => {
        const discordUrl = discordSwitch(datacenter);
        dispatch({ type: 'dataCenterURL', url: discordUrl })
    }, [datacenter]);

    const handlePing = () => {
        if (routeData[currentStop] === undefined) return;
        if (!dataCenterURL) return;
        if (world === '') return;

        const { zone, instance, coords } = routeData[currentStop];

        const data = `${world} train <> ${zone} ${coords} i${instance}`
        const centurio = {
            method: 'POST',
            url: `${dataCenterURL}`,
            data: {
                username: 'DaBot',
                content: `${data}`,
                avatar_url: ''
            },
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const coeurl = {
            method: 'POST',
            url: `${discordConfig.coeurlURL}`,
            data: {
                username: 'hunt-conductor',
                content: `${data}`,
                avatar_url: ''
            },
            headers: {
                'Content-Type': 'application/json',
            }
        };

        Axios(centurio);
        // Axios(coeurl);
    }

    return (
        <Button onClick={handlePing}>
            <FontAwesomeIcon icon={faDiscord} size='3x' />
        </Button>
    );
};

export default DiscordButtonA;