import React from 'react';

export function UsersList({ users, deleteUser }) {


    const deleteUserClicked = (user) => {
        deleteUser(user);
    }

    const isUserInactive = status => {
        return status === 'Inactive';
    }


    return (<>

        <ul>
            {users.map(user =>
                <li key={user.id}>

                    <button onClick={deleteUserClicked}>x</button>

                    {/* Example of inline style conditional witout css ClassName reference */}
                    <pre style={{
                        textDecoration: isUserInactive(user.status) ? 'line-through' : 'none'
                    }}>{user.name}</pre>


                </li>)}
        </ul>
    </>);
}
