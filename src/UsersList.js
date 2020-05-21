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


                <EuiPanel key={user.id} style={user.status === 'Inactive' ? { backgroundColor: '#f0f1ef', color: '#959392' } : null}   >


                    <div className={'flexPanel'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                        <div style={{
                            textDecoration: user.status === 'Inactive' ? 'line-through' : 'none'
                        }}>{user.name}</div>

                        <div style={{ marginLeft: 'auto' }}>
                            <DeleteUserButton user={user} onDeleteUser={deleteUser}></DeleteUserButton>
                        </div>
                    </div>


                </EuiPanel>
            )}
        </Fragment>
    );
}

export default UsersList;
