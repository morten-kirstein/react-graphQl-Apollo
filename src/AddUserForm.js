import React, { useState } from 'react';
import {
    EuiForm,
    EuiFormRow,
    EuiFieldText,
    EuiButton,
    EuiSpacer
} from '@elastic/eui';

export function AddUserForm(props) {

    const [state, setState] = useState(
        {
            name: '',
            email: ''
        });

    const handleSubmit = (event) => {
        debugger;
        event.preventDefault();
        props.onSubmit(state);
    }


    const updateName = event => {
        setState(prevState => {
            return { ...prevState, name: event.target.value };
        });
    }



    const updateEmail = event => {
        setState(prevState => {
            return { ...prevState, email: event.target.value };
        });
    }

    return (

        <EuiForm component="form">

            <EuiFormRow label="First and last name:" helpText="Please enter your full name">
                <EuiFieldText onBlur={updateName} />
            </EuiFormRow>


            <EuiFormRow label="Email Adress" helpText="Please enter your email">
                <EuiFieldText onBlur={updateEmail} />
            </EuiFormRow>

            <EuiSpacer />

            <EuiButton type="submit" onClick={handleSubmit} fill>
                Add user
            </EuiButton>

        </EuiForm >);
}
