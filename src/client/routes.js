import App from './App';
import HomePage from './pages/HomePage';
import UserList from './pages/UserListPage';

export default [
  { ...App, routes: [{ ...HomePage, path: '/', exact: true }, { ...UserList, path: '/users' }] },
];
