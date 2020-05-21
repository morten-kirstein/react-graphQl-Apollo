import React, { useState } from 'react';
import {
    EuiForm,
    EuiFormRow,
    EuiFieldText,
    EuiButton,
    EuiSpacer
} from '@elastic/eui';

const AddUserForm = ({ onSubmit }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, email });
        resetForm(setName, setEmail);
    }

    const resetForm = () => {
        setName('');
        setEmail('');
    }

    return (

        <EuiForm component="form">

            {/* TODO - validation  */}
            <EuiFormRow label="First and last name:" helpText="Please enter your full name">
                <EuiFieldText
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </EuiFormRow>


            {/* TODO Validation */}
            <EuiFormRow label="Email Adress" helpText="Please enter your email">
                <EuiFieldText
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
            </EuiFormRow>

            <EuiSpacer />

            {/* TODO - Disable Submit button if form is Prestine And Invalid */}
            <EuiButton type="submit" onClick={handleSubmit} fill>
                Add user
            </EuiButton>

        </EuiForm >);
}


export default AddUserForm;


