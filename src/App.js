import React, { useState } from 'react';
import UsersList from './UsersList';
import SortingPanel from "./SortingPanel";
import { AddUserForm } from './AddUserForm';
import { FilterUsers } from './FilterUsers';
import { orderBy } from 'lodash';

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
  EuiPanel,
  EuiButtonIcon
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import './App.css';


// id: ID!
// name: String @fake(type:fullName)
// email: String @fake(type:email)
// status: String @examples(values: ["Active", "Inactive"])


const users = [
  {
    id: 1,
    name: "Magnus",
    email: "fake@fake.dk",
    status: "Active"
  },
  {
    id: 2,
    name: "Masidter jørgen",
    email: "fake@fake.com",
    status: "Active"
  },
  {
    id: 3,
    name: "albert",
    email: "fake@fake.in",
    status: "Inactive"
  }
];

function App() {

  const [state, setState] = useState(
    {
      users: users,
      modifiedCollection: [...users]
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

  const sortUsersByName = direction => {

    const acsCollection = orderBy(
      state.modifiedCollection,
      ["name"],
      [direction]
    );

    setState(previousState => ({ modifiedCollection: [...acsCollection] }));
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

                  <SortingPanel onClickSortingDirection={sortUsersByName}></SortingPanel>

                  <EuiSpacer></EuiSpacer>
                  <UsersList
                    deleteUserClicked={deleteUser}
                    users={state.modifiedCollection}>
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
