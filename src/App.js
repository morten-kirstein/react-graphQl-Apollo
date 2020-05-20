import React, { useState, useEffect } from 'react';
import UsersList from './UsersList';
import SortingPanel from "./SortingPanel";
import AddUserForm from './AddUserForm';
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
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';

const users_data = [
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

  const [users, setUsers] = useState([...users_data]);
  const [usersList, setUsersList] = useState(users);


  useEffect(() => {
    // get Initial data from GraphQl and Apollo
    setUsersList(users);
  }, [users]);


  // To be replaced
  const [state, setState] = useState(
    {
      users: users,
      modifiedCollection: [...users_data]
    }
  );


  const addUser = userDetails => {
    const newUser = Object.assign(userDetails, { status: 'Active', id: users.length + 1 });
    setUsers(previousState => ([...previousState, newUser]));
  }

  const deleteUser = user => {
    console.log(user);
  }

  const filterUsers = filterText => {

    // if (!filterText) {
    //   return state.users;
    // }

    // return state.users.filter(user => user.name.includes(filterText));
  }

  const sortUsersByName = direction => {

    const sortedCollection = orderBy(
      usersList, [user => user.name.toLowerCase()],
      [direction]
    );

    setUsersList([...sortedCollection]);
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
                    users={usersList}>
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
