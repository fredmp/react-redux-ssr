import App from './App';
import HomePage from './pages/HomePage';
import UserList from './pages/UserListPage';
import AdminList from './pages/AdminListPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      { ...HomePage, path: '/', exact: true },
      { ...AdminList, path: '/admins' },
      { ...UserList, path: '/users' },
      { ...NotFoundPage },
    ],
  },
];
