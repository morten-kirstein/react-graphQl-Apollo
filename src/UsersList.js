import React from 'react';


export function UsersTable({ users }) {

    return (
        <div>
            <ul>
                {users.map(user => <li key={user.id}>
                    {user.name}
                </li>)}
            </ul>
        </div>
    );
}


