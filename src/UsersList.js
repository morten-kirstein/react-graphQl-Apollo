import React, { Fragment } from 'react';
import { DeleteUserButton } from './DeleteUserButton';

import {
    EuiPanel
} from '@elastic/eui';


const UsersList = ({ users, filter, deleteUserClicked }) => {

    function deleteUser(user) {
        deleteUserClicked(user);
    }

    return (
        <Fragment>

            {users.filter(x => x.name.toLowerCase().includes(filter.toLowerCase())).map(user =>

                <EuiPanel key={user.id}>
                    <DeleteUserButton user={user} onDeleteUser={deleteUser}></DeleteUserButton>

                    {/* Example of inline style conditional without css ClassName reference */}
                    <span style={{
                        textDecoration: user.status === 'Inactive' ? 'line-through' : 'none'
                    }}>{user.name}</span>

                </EuiPanel>
            )}
        </Fragment>
    );
}

export default UsersList;

