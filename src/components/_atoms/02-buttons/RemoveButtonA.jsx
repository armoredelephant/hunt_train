import React, { useContext } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import { StateContext, DispatchContext } from '../../../App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faTrashAlt);
const API_HOST_URL = process.env.API_URL;

const Button = styled.button`
  color: ${props => props.theme.red};
  background: ${props => props.theme.cardbg};
  border: none;

  &:visited,
  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    outline: none;
  }
`;

const RemoveButtonA = props => {
    const state = useContext(StateContext);

    const { instance, mark, zone } = props;
    const { cardKey } = state;

    const handleRemove = e => {
        e.preventDefault();
        const deleteMark = async url => {
            const options = {
                cardKey: cardKey,
                instance: instance,
                mark: mark,
                zone: zone
            };

            await Axios.post(url, options)
        }
        deleteMark(`${API_HOST_URL}/api/scout/deleteMark`);
    };

    return (
        <Button onClick={handleRemove}>
            <FontAwesomeIcon icon={faTrashAlt} size='1x' />
        </Button>
    );
};

export default RemoveButtonA;