import React, { useContext } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import { DispatchContext, StateContext } from '../../../App';

const Container = styled.div`

`;

const Wrapper = styled.div`

`;

const Label = styled.label`

`;

const Select = styled.select`

`;

const Option = styled.option`

`;

const WorldDropDownM = () => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const { allWorlds, allDatacenters, datacenter, world } = state;

    console.log(allDatacenters);

    // dispatch after axios call that sets worlds for fetched DC.
    const handleDC = e => {
        e.preventDefault()
        const target = e.target;
        const dc = target.value;
        const lowerCaseDC = dc.toLowerCase();
        Axios.get(`/resources/stubs/${lowerCaseDC}_worlds.json`)
            .then(res => {
                console.log(dc);
                const worlds = res.data.worlds;
                dispatch({ type: 'datacenter', worlds: worlds, dc: dc }); // DC will be used in dc manager to select webhook.
            });
    };

    // dispatch that sets value to state that can be used for the discord message. JUST NEED WORLD
    const handleWorld = e => {
        e.preventDefault();
        const target = e.target;
        const world = target.value;
        dispatch({ type: 'world', world: world });
    };
    // dispatch for selected world.

    return (
        <Container>
            <Wrapper>
                <Label>Datacenter:</Label>
                <Select onChange={handleDC} value={datacenter}>
                    <Option value={'Select a dataceter...'} selected>Select a datacenter...</Option>
                    {allDatacenters.map(dc => {
                        const rdmKey = Math.random()
                            .toString(36)
                            .substring(7);
                        return (
                            <Option
                                key={rdmKey}
                                value={dc}
                            >
                                {dc}
                            </Option>
                        )
                    })}
                </Select>
            </Wrapper>
            <Wrapper>
                <Label>World:</Label>
                <Select onChange={handleWorld} value={world}>
                    <Option value={'Select a world...'} selected>Select a world...</Option>
                    {allWorlds &&
                        allWorlds.map(world => {
                            const rdmKey = Math.random()
                                .toString(36)
                                .substring(7);
                            return (
                                <Option
                                    key={rdmKey}
                                    value={world}
                                >
                                    {world}
                                </Option>
                            )
                        })
                    }
                </Select>
            </Wrapper>
        </Container>
    );
};

export default WorldDropDownM;