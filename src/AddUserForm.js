import React, { useState } from 'react';
import {
    EuiForm,
    EuiFormRow,
    EuiFieldText,
    EuiButton,
    EuiSpacer
} from '@elastic/eui';

export function AddUserForm(props) {

    const defaultState = {
        name: '',
        email: ''
    }

    const [state, setState] = useState(defaultState);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(state);
        setState(defaultState);
    }



    const setName = event => {
        setState(prevState => {
            return { ...prevState, name: event.target.value };
        });
    }



    const setEmail = event => {
        setState(prevState => {
            return { ...prevState, email: event.target.value };
        });
    }

    return (

        <EuiForm component="form">

            <EuiFormRow label="First and last name:" helpText="Please enter your full name">
                <EuiFieldText
                    onBlur={setName} />

            </EuiFormRow>


            <EuiFormRow label="Email Adress" helpText="Please enter your email">
                <EuiFieldText onBlur={setEmail} />
            </EuiFormRow>

            <EuiSpacer />

            <EuiButton type="submit" onClick={handleSubmit} fill>
                Add user
            </EuiButton>

        </EuiForm >);
}
