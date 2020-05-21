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

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const query = gql`
  query allUsers {
    allUsers {
      id
      name,
      email,
      status
    }
  }
`;

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

  const { loading, data } = useQuery(query)

  const [users, setUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [filterText, setFilterText] = useState('');


  useEffect(() => {
    // get Initial data from GraphQl with Apollo

    if (data) {
      setUsers([...data.allUsers]);
    }
    // setUsersList(users);

  }, [data]);


  const addUser = userDetails => {
    const newUser = Object.assign(userDetails, { status: 'Active', id: users.length + 1 });
    setUsers(previousState => ([...previousState, newUser]));
  }

  const deleteUser = user => {
    console.log(user);
  }

  const sortUsersByName = direction => {

    const sortedCollection = orderBy(
      users, [user => user.name.toLowerCase()],
      [direction]
    );

    setUsers([...sortedCollection]);
  }

  if (loading) return <h2>Loading</h2>
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
                  <FilterUsers onFilter={filter => { setFilterText(filter) }}></FilterUsers>

                  <EuiSpacer></EuiSpacer>

                  <SortingPanel onClickSortingDirection={sortUsersByName}></SortingPanel>

                  <EuiSpacer></EuiSpacer>
                  <UsersList
                    filter={filterText}
                    deleteUserClicked={deleteUser}
                    users={users}>
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
