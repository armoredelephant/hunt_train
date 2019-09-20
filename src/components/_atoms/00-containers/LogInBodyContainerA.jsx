import React, { useContext } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import firebase from 'firebase/app';

import 'firebase/auth';

import FormErrorA from '@A/04-errors/FormErrorA';
import ServerSelectA from '@A/05-form_fields/ServerSelectA';
import SpinnerA from '@A/06-spinners/SpinnerA';
import ClipSpinnerA from '@A/06-spinners/ClipSpinnerA';

import { DispatchContext, StateContext } from '../../../App';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;
`;

const Form = styled.form`
    display: flex;
    flex-flow: column;
    align-self: center;
    width: 100%;
    margin: 50px;
    justify-content: stretch;
`;

const Input = styled.input`
    display: flex
    flex: 2;
    border: none;
    background: ${props => props.theme.cardbg};
    color: ${props => props.theme.fntClr};
    font-family: ${props => props.theme.ff};
    line-spacing: ${props => props.theme.ls};
    font-size: 16px;

    &:visited,
    &:focus,
    &:hover,
    &:active {
        text-decoration: none;
        outline: none;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
        font-family: ${props => props.theme.ff};
        line-spacing: ${props => props.theme.ls};
        -webkit-box-shadow: 0 0 0 30px ${props => props.theme.cardbg} inset !important;
        -webkit-text-fill-color: ${props => props.theme.fntClr} !important;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-content: center;
    border-bottom: 1px solid ${props => props.theme.darkestbg};
    padding-bottom: 8px;
    margin-bottom: 30px;
`;

const SubmitContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
`;

const Submit = styled.input`
    display: flex
    flex: 2;
    border: none;
    padding: 4px 21px;
    background: ${props => props.theme.blue};
    color: ${props => props.theme.cardbg};
    font-family: ${props => props.theme.ff};
    line-spacing: ${props => props.theme.ls};
    border-bottom: 1px solid ${props => props.theme.blue};
    border-radius: ${props => props.theme.brad};
    font-size: ${props => props.theme.btnFS};
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    align-self: center;
    cursor: pointer;

    &:focus,
    &:active {
        transform: scale(1.1);
    }

    &:visited,
    &:focus,
    &:hover,
    &:active {
        text-decoration: none;
        outline: none;
    }
`;

// add Char name and server to "Create" login form
// When successfully signed in, remove modal, and make header visibile?

const API_HOST_URL = process.env.API_URL;

const LogInBodyContainerA = props => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const { formCreate, formLogin, errorMessage, formError, isLoading } = state;
    const { history } = props;

    const auth = firebase.auth();

    firebase.auth().onAuthStateChanged(user => {
        dispatch({ type: 'userUpdate', user: user });
    });

    // Then make a call here for the verification from profile page.
    // https://xivapi.com/character/1624479

    const handleSubmit = e => {
        e.preventDefault();
        const target = e.target;

        // universal form fields
        const email = target.email.value;
        const pass = target.password.value;

        // password length
        const passLength = pass.length;

        dispatch({ type: 'clearErrors' }); // clean up errors

        if (passLength < 8) { // checking if password is 8 characters
            dispatch({ type: 'formError', error: 'Password must be at least 8 characters.' });
            return;
        };

        if (formCreate) { // if create is selected it will run through this code
            // sign-up form fields
            const character = target.character.value;
            const confirm = target.confirm.value;
            const server = target.server.value;

            if (server === 'default') { // checking if a server was selected
                dispatch({ type: 'formError', error: 'Please select a server.' });
                return;
            };

            if (!(confirm === pass)) { // making sure passwords match
                dispatch({ type: 'formError', error: 'Passwords do not match.' })
                return;
            }

            dispatch({ type: 'loading' }); // START LOADING

            // fetch FFXIV char data
            Axios.get(`https://xivapi.com/character/search?name=${character}&server=${server}`, { mode: 'cors' })
                .then(res => {
                    const results = res.data.Results[0]; // results of fetch

                    const charData = { // charData we need from fetch
                        id: results.ID,
                        avatar: results.Avatar
                    };

                    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
                        .then(() => {
                            auth.createUserWithEmailAndPassword(email, pass) // create the account
                                .then(() => {
                                    const options = { // sending out charData and firebase uId to backend.
                                        character: charData,
                                        userId: auth.currentUser.uid
                                    };

                                    Axios.post(`${API_HOST_URL}/api/auth/new`, options) // post data to backend
                                        .then(() => {
                                            dispatch({ type: 'loading' }); // end loading
                                            dispatch({ type: 'formReset' }); // reset form
                                            dispatch({ type: 'modal' });
                                            return;
                                        })
                                        .catch(() => {
                                            dispatch({ type: 'formError', error: 'There was a problem handling this request, please try again.' }); // if any issue posting to DB, dispatch error.
                                        });
                                })
                                .catch(error => {
                                    dispatch({ type: 'formError', error: error.message }); // if the email is already in-use, dispatch error.
                                })
                        })
                        .catch(() => {
                            dispatch({ type: 'formError', error: 'There was a problem creating session. Please try again shortly.' });
                        })
                })
                .catch(() => {
                    dispatch({ type: 'formError', error: 'Character not found.' }); // if no char data is found on that server, dispatch error.
                    return;
                });
        } else {
            // if formLogin 
            dispatch({ type: 'loading' });
            auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(() => {
                    auth.signInWithEmailAndPassword(email, pass)
                        .then(() => {
                            dispatch({ type: 'modal' });
                            dispatch({ type: 'loading' });
                        })
                        .catch(() => {
                            dispatchEvent({ type: 'formError', error: 'Invalid username or password.' });
                        });
                })
                .catch(() => {
                    dispatch({ type: 'formError', error: 'There was a problem creating session. Please try again shortly.' });
                })
        }
        dispatch({ type: 'formReset' });
    };

    return (
        <Container>
            {isLoading ?
                <ClipSpinnerA />
                :
                <Form onSubmit={handleSubmit}>
                    <InputContainer>
                        <Input
                            type='email'
                            name='email'
                            placeholder='Email'
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            type='password'
                            name='password'
                            placeholder={formCreate ? 'Password - 8 char' : 'Password'}
                        />
                    </InputContainer>
                    {formLogin &&
                        <FormErrorA
                            errorMessage={errorMessage}
                            formError={formError}
                        />
                    }
                    {formCreate &&
                        <>
                            <InputContainer>
                                <Input
                                    type='password'
                                    name='confirm'
                                    placeholder='Confirm password'
                                    required
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    type='text'
                                    name='character'
                                    placeholder='Character Name'
                                    required
                                />
                            </InputContainer>
                            <ServerSelectA />
                            <FormErrorA
                                errorMessage={errorMessage}
                                formError={formError}
                            />
                        </>
                    }
                    <SubmitContainer>
                        <Submit type='submit' value={formCreate ? 'Create' : 'Log In'} />
                    </SubmitContainer>
                </Form>
            }
        </Container>
    );
};

export default LogInBodyContainerA;

