// old syntax before react-router-config
// import React from 'react';
// import { Route } from 'react-router-dom';

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={UsersList} />
//     </div>
//   );
// };

import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UsersListPage,
        path: '/users',
      },
    ],
  },
];
