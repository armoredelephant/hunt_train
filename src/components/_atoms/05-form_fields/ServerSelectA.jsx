import React from 'react';
import styled from 'styled-components';

import { serverList } from 'Utils/servers';

const Container = styled.div`
    display: flex;
    flex-flow: row;
    align-content: center;
    margin-bottom: 30px;
`;

const Select = styled.select`
    display: flex;
    outline: none;

    &:focus,
    &:clicked,
    &:active {
        outline: none;
    }
`;

const Option = styled.option`

`;

const ServerSelectA = () => {
    return (
        <Container>
            <Select placeholder={'Server'}>
                <Option value={'Server'}>World server</Option>
                {serverList.map(server => {
                    const rdmKey = Math.random()
                        .toString(36)
                        .substring(7);
                    return (
                        <Option
                            key={rdmKey}
                            value={server}
                        >
                            {server}
                        </Option>
                    );
                })}
            </Select>
        </Container>
    );
};

export default ServerSelectA;