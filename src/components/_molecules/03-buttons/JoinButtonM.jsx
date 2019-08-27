import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import firebase from 'firebase';
import 'firebase/database';

import { DispatchContext, StateContext } from '../../../App';

import ThemedButtonA from '@A/02-buttons/ThemedButtonA';

const Container = styled.div`
    display: flex;
    flex-flow: column;
    border: 1px solid white;
    border-radius: ${props => props.theme.brad};
    margin-top: 5px;
    height: 200px;
    justify-content: space-around;
    align-items: center;
    background: ${props => props.theme.btnBG};
`;

const Input = styled.input`
    border-radius: ${props => props.theme.brad};
    font-family: ${props => props.theme.ff};
    background: #DFDFDF;
    font-size: ${props => props.theme.btnFS};
    font-color: ${props => props.theme.darkBG};
    letter-spacing: ${props => props.theme.ls};
    text-align: center;

    &:focus {
        outline: none;
    }
`;

const JoinButtonM = props => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const { joinURL } = state;
    const { history } = props;

    const fbDatabase = firebase.database();
    const cardRef = fbDatabase.ref(`cards/${joinURL}`)

    const handleChange = e => {
        e.preventDefault();
        const target = e.target;
        dispatch({ type: 'join', value: target.value });
    };

    const handleJoin = props => {
        cardRef.once('value', snapshot => {
            if (snapshot.val()) {
                dispatch({ type: 'updateKey', cardKey: joinURL })
                history.push(joinURL);
            }
            return;
        })

    }

    return (
        <Container>
            <ThemedButtonA // prettier-ignore
                handleClick={handleJoin}
                text="Join in-progress"
                isDisabled={!joinURL}
                inverted={true}
            />
            <Input onChange={handleChange} placeholder={'Past key to join...'} />
        </Container>
    );
};

export default withRouter(JoinButtonM);
