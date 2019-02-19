/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends React.Component {
  componentDidMount() {
    const { fetchUsers: fetch } = this.props;
    fetch();
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

export default connect(
  state => ({ users: state.users }),
  { fetchUsers },
)(UserList);
