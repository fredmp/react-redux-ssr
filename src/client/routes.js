import App from './App';
import HomePage from './pages/HomePage';
import UserList from './pages/UserListPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      { ...HomePage, path: '/', exact: true },
      { ...UserList, path: '/users' },
      { ...NotFoundPage },
    ],
  },
];
