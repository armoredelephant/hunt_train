import React, { useContext } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import { discordConfig } from 'Utils/discordConfig';
import { StateContext } from '../../../App';

const Button = styled.button`

`;

// possibly need a data_center_manager component with a switch that determines which discord webhook to use based on DC.

const DiscordButtonA = () => {
    const state = useContext(StateContext);
    const { token, hookID } = discordConfig;
    const { currentStop, routeData } = state;

    const handlePing = () => {
        if (routeData === {}) return null;
        const data = routeData[currentStop].zone
        const options = {
            method: 'POST',
            url: `https://discordapp.com/api/webhooks/${hookID}/${token}`,
            data: {
                username: 'DaBot',
                content: `${data}`,
                avatar_url: ''
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }

        Axios(options);
    }

    return (
        <Button onClick={handlePing}></Button>
    );
};

export default DiscordButtonA;