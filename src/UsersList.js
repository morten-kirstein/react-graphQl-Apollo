import React from 'react';

export function UsersList({ users, deleteUser }) {


    const deleteUserClicked = (user) => {


        deleteUser(user);
    }


    return (<>

        <ul>
            {users.map(user =>
                <li key={user.id}>








                    <button onClick={deleteUserClicked}>x</button>

                    <pre style={{
                        textDecoration: user.status === 'Inactive' ? 'line-through' : 'none'
                    }}>{user.name}</pre>





                </li>)}
        </ul>
    </>);
}
