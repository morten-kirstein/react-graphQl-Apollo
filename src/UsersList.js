import React from 'react';

export function UsersList({ users }) {
    return (<>

        <ul>
            {users.map(user => <li key={user.id}>
                {user.name}
            </li>)}
        </ul>
    </>);
}
