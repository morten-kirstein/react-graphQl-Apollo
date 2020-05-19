import React, { useState } from 'react';
import { AddUserForm } from './AddUserForm';
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
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiPanel
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

  const deleteUser = user => {
    console.log(user);
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

            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>

            <EuiFlexGroup>
              <EuiFlexItem>
                {/* Can be converted to seperate component */}
                <EuiPanel paddingSize="l">
                  <EuiTitle>
                    <h2>Users:</h2>
                  </EuiTitle>
                  <FilterUsers onFilter={filterUsers}></FilterUsers>
                  <EuiSpacer></EuiSpacer>
                  <UsersList
                    deleteUserClicked={deleteUser}
                    users={state.users}>
                  </UsersList>
                </EuiPanel>
              </EuiFlexItem>


              <EuiFlexItem>
                <EuiPanel paddingSize="l">
                  <EuiTitle>
                    <h2>Add New User:</h2>
                  </EuiTitle>
                  <AddUserForm onSubmit={addUser}></AddUserForm>
                </EuiPanel>
              </EuiFlexItem>

            </EuiFlexGroup>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage >
  )
}

export default App;
