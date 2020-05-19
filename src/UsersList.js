import React, { Fragment } from 'react';
import { DeleteUserButton } from './DeleteUserButton';

import {
    EuiPanel
} from '@elastic/eui';


export function UsersList({ users, deleteUserClicked }) {

    function deleteUser(user) {
        deleteUserClicked(user);
    }

    return (
        <Fragment>

            {users.map(user =>

                <EuiPanel key={user.id}>
                    {/* Example of inline style conditional witout css ClassName reference */}
                    <span style={{
                        textDecoration: user.status === 'Inactive' ? 'line-through' : 'none'
                    }}>{user.name}</span>

                    <DeleteUserButton user={user} onDeleteUser={deleteUser}></DeleteUserButton>

                </EuiPanel>
            )}
        </Fragment>
    );
}

