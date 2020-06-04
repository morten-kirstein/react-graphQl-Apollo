import React, { useState, useEffect } from 'react';
import UsersList from './UsersList';
import SortingPanel from "./SortingPanel";
import AddUserForm from './AddUserForm';
import FilterUsers from './FilterUsers';
import { orderBy } from 'lodash';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { REMOVE_USER, ADD_USER, GET_ALL_USERS } from "./gql-query";

import '@elastic/eui/dist/eui_theme_light.css';
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






function App() {


  const { loading, error, data } = useQuery(GET_ALL_USERS)
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState('');

  // This line gives the new collection from the server.
  // const [deleteUser] = useMutation(REMOVE_USER, { refetchQueries: mutationResault => [{ query: GET_ALL_USERS }] });
  const [deleteUser] = useMutation(REMOVE_USER, {
    refetchQueries: mutationResault => {
      debugger;
      removeUserFromCollection(mutationResault.data.removeUser)
    }
  });


  // This line gives the new collection from the server.
  // const [addNewUser] = useMutation(ADD_USER, { refetchQueries: mutationResault => [{ query: GET_ALL_USERS }] });
  const [addNewUser] = useMutation(ADD_USER, { refetchQueries: mutationResault => { addUserToCollection(mutationResault.data.addUser) } });

  useEffect(() => {
    if (data) {
      setUsers([...data.allUsers]);
    }

    return () => { }

  }, [loading, data]);


  const addUserToCollection = newUserDetails => {
    setUsers(previousState => ([...previousState, newUserDetails]));
  }

  // The Wrong user is returned. Could be the GraphQL-faker API?
  const removeUserFromCollection = userDetails => {

    const collection = users.filter(user => user.id !== userDetails.id);
    setUsers([...collection]);
  }


  // Example of implementation of 3rd Party tool. The 3rd party Library must be in seperate file
  const sortUsersByName = direction => {
    const sortedCollection = orderBy(
      users, [user => user.name.toLowerCase()],
      [direction]
    );

    setUsers([...sortedCollection]);
  }

  if (loading) return <h2>Loading</h2>
  if (error) return <h2>Error getting data</h2>
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
                    <h2>Add new user:</h2>
                  </EuiTitle>
                  <AddUserForm onSubmit={(user) => addNewUser({ variables: { name: user.name, email: user.email, status: 'Active' } })}></AddUserForm>
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
