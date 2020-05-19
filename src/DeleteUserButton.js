import React from 'react';

import {
    EuiIcon,
    EuiButton
} from '@elastic/eui';


export function DeleteUserButton(props) {

    const handleClick = () => {

        props.onDeleteUser(props.user);
    }


    return (
        <EuiButton onClick={handleClick} type="trash" size={'s'}>X</EuiButton>
    )

}
