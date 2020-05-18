import React from 'react';
import './App.css';
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
} from '@elastic/eui';


// id: ID!
// name: String @fake(type:fullName)
// email: String @fake(type:email)
// status: String @examples(values: ["Active", "Inactive"])


const users = [
  {
    id:1,
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
                <h2>Users</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>

            Add user form
            userlist

           
              <ul>
            {users.map( user => <li key={user.id}>
              {user.name}
              </li> )}

            </ul>

           


          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  )
}

export default App;
