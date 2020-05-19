import React from 'react';
import { DeleteUserButton } from './DeleteUserButton';




export function UsersList({ users, deleteUserClicked }) {


    function deleteUser(user) {
        deleteUserClicked(user);
    }

    return (<>

        <ul>
            {users.map(user =>
                <li key={user.id}>
                    <div>
                        {/* Example of inline style conditional witout css ClassName reference */}
                        <span style={{
                            textDecoration: user.status === 'Inactive' ? 'line-through' : 'none'
                        }}>{user.name}</span>
                        <DeleteUserButton user={user} onDeleteUser={deleteUser}></DeleteUserButton>
                    </div>






                </li>)}
        </ul>
    </>);
}
