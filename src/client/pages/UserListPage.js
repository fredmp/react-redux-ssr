/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends React.Component {
  componentDidMount() {
    const { users, fetchUsers: fetch } = this.props;
    if (!users) fetch();
  }

  renderList() {
    const { users } = this.props;
    return users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        User List
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(
    state => ({ users: state.users }),
    { fetchUsers },
  )(UserList),
};
