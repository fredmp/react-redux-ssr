import HomePage from './pages/HomePage';
import UserList from './pages/UserListPage';

export default [{ ...HomePage, path: '/', exact: true }, { ...UserList, path: '/users' }];
