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
import { useQuery, useMutation } from '@apollo/react-hooks';



const GET_ALL_USERS = gql`
  query allUsers {
    allUsers {
      id
      name,
      email,
      status
    }
  }
`;


const ADD_USER = gql`
  mutation addUser {
    allUsers {
      id
      name,
      email,
      status
    }
  }
`;

const REMOVE_USER = gql`
  mutation removeUser($id: ID!){
    removeUser(id: $id) {
      id
      name,
      email,
      status
    }
  }
`;



function App() {

  const { loading, data } = useQuery(GET_ALL_USERS)

  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState('');


  useEffect(() => {
    // get Initial data from GraphQl with Apollo

    if (data) {
      setUsers([...data.allUsers]);
    }
  }, [data]);


  const addUser = userDetails => {
    const newUser = Object.assign(userDetails, { status: 'Active', id: users.length + 1 });
    setUsers(previousState => ([...previousState, newUser]));
  }



  const [deleteUser] = useMutation(REMOVE_USER);

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
              <h1>React - GraphQL - Apollo</h1>
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
                    deleteUserClicked={user => deleteUser({ variables: { id: user.id } })}
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
