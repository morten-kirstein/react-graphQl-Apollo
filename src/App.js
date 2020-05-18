import React, { useState } from 'react';
import { AddUserForm } from './AddUserForm';
import { UsersTable } from './UsersTable';
import { UsersList } from './UsersList';

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import './App.css';
import { FilterUsers } from './FilterUsers';


// id: ID!
// name: String @fake(type:fullName)
// email: String @fake(type:email)
// status: String @examples(values: ["Active", "Inactive"])


const users = [
  {
    id: 1,
    name: "faker 1",
    email: "fake@fake.dk",
    status: "Active"
  },
  {
    id: 2,
    name: "faker 2",
    email: "fake@fake.com",
    status: "Active"
  },
  {
    id: 3,
    name: "faker 3",
    email: "fake@fake.in",
    status: "Inactive"
  }
];


function App() {

  const [state, setState] = useState(
    {
      users: users,
      filteredUsers: [...users]
    }
  );


  const addUser = userDetails => {
    const newUser = { ...userDetails, id: state.users.length + 1 }
    setState(previousState => ({ users: [...previousState.users, newUser] }));
  }

  const filterUsers = filterText => {

    if (!filterText) {
      return state.users;
    }

    return state.users.filter(user => user.name.includes(filterText));
  }


  return (
    <EuiPage>
      <EuiPageBody component="div">
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Accuranker - test</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>Users:</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>

            <AddUserForm onSubmit={addUser}></AddUserForm>
            <FilterUsers onFilter={filterUsers}></FilterUsers>
            <UsersList users={state.users}></UsersList>
            <UsersTable users={state.users}></UsersTable>

          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  )
}

export default App;
