import React from 'react';

import {
    // EuiButtonIcon,
    EuiButton
} from '@elastic/eui';


export function DeleteUserButton(props) {

    const handleClick = () => {

        props.onDeleteUser(props.user);
    }

    return (
        // <EuiButtonIcon
        //     onClick={handleClick}
        //     iconType={'trash'}
        // />
        <EuiButton onClick={handleClick} type="trash" size={'s'}>X</EuiButton>

    )

}
