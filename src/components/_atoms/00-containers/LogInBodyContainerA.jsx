import React, { useContext } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import firebase from 'firebase/app';

import 'firebase/auth';

import FormNotificationA from '@A/03-notifications/FormNotificationA';
import ServerSelectA from '@A/05-form_fields/ServerSelectA';
import InputFieldA from '@A/05-form_fields/InputFieldA';
import SubmitButtonA from '@A/02-buttons/SubmitButtonA';
import RadioButtonA from '@A/05-form_fields/RadioButtonA';
import ClipSpinnerA from '@A/06-spinners/ClipSpinnerA';

import { DispatchContext, StateContext } from '../../../App';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
    width: 100%;
    min-height: 384px;
`;

const Form = styled.form`
    display: flex;
    flex-flow: column;
    align-self: center;
    width: 100%;
    margin: 50px;
    justify-content: stretch;
`;

// add Char name and server to "Create" login form
// When successfully signed in, remove modal, and make header visibile?

const API_HOST_URL = process.env.API_URL;

const LogInBodyContainerA = props => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const { formCreate, formLogin, formNotification, formSuccess, formError, isLoading, radioChecked } = state;
    const { history } = props;

    const auth = firebase.auth();

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

        dispatch({ type: 'clearNotifications' }); // clean up errors

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
                        avatar: results.Avatar,
                        charName: results.Name,
                        server: results.Server
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
                            dispatch({ type: 'formError', error: 'Invalid username or password.' });
                        });
                })
                .catch(() => {
                    dispatch({ type: 'formError', error: 'There was a problem creating session. Please try again shortly.' });
                })
        }
        dispatch({ type: 'formReset' });
    };

    const handleReset = e => {
        e.preventDefault();
        const target = e.target;
        const email = target.email.value;

        dispatch({ type: 'clearNotifications' });

        dispatch({ type: 'loading' });

        auth.sendPasswordResetEmail(email)
            .then(() => {
                dispatch({ type: 'formSuccess', message: 'Reset password email has been sent.' });
            })
            .catch(() => {
                dispatch({ type: 'formError', error: 'There was a problem handling this request. Please try again' });
            })
    };

    const radioText = 'Forgot password?';

    const handleSubmitText = () => {
        if (radioChecked) return 'Reset';
        if (formCreate) return 'Create';
        return 'Log In';
    }

    const submitText = handleSubmitText();

    return (
        <Container>
            {isLoading ?
                <ClipSpinnerA />
                :
                <Form onSubmit={radioChecked ? handleReset : handleSubmit}>
                    <InputFieldA
                        inputN='email'
                        inputT='email'
                        inputPlaceHolder='* Email'
                    />
                    {!radioChecked &&
                        <InputFieldA
                            inputN='password'
                            inputT='password'
                            inputPlaceHolder={formCreate ? '* Password - 8 char' : '* Password'}
                            require={true}
                        />
                    }
                    {!formCreate &&
                        <RadioButtonA text={radioText} />
                    }
                    {formLogin &&
                        <FormNotificationA
                            formNotification={formNotification}
                            formError={formError}
                            formSuccess={formSuccess}
                        />
                    }
                    {formCreate &&
                        <>
                            <InputFieldA
                                inputN='confirm'
                                inputT='password'
                                inputPlaceHolder='* Confirm password'
                                require={true}
                            />
                            <InputFieldA
                                inputN='character'
                                inputT='text'
                                inputPlaceHolder='* Character Name'
                                require={true}
                            />
                            <ServerSelectA />
                            <FormNotificationA
                                formNotification={formNotification}
                                formError={formError}
                                formSuccess={formSuccess}
                            />
                        </>
                    }
                    <SubmitButtonA
                        submitT='submit'
                        submitV={submitText}
                    />
                </Form>
            }
        </Container>
    );
};

export default LogInBodyContainerA;

