/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../actions';

class UserList extends React.Component {
  componentDidMount() {
    const { users, fetchUsers: fetch } = this.props;
    if (!users || users.length < 1) fetch();
  }

  head() {
    const { users } = this.props;
    return (
      <Helmet>
        <title>{`${users.length} Users`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
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
        {this.head()}
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
