import React from 'react';
import styled from 'styled-components';

const Notification = styled.p`
    display: flex;
    align-self: center;
    color: ${props => props.formSuccess ? props.theme.green : props.theme.red};
    visibility: ${props => props.isHidden && 'hidden'};
`;

const Container = styled.div`
    display: flex;
    margin: .938rem 0;
    justify-content: center;
`;

const FormNotificationA = props => {
    const { formError, formSuccess, formNotification, } = props;
    const handleHidden = () => {
        if (formError) return false;
        if (formNotification) return false;
        return true;
    }
    const isHidden = handleHidden();

    return (
        <Container>
            <Notification
                isHidden={isHidden}
                formSuccess={formSuccess}
            >
                {formNotification}
            </Notification>
        </Container>
    );
};

export default FormNotificationA;