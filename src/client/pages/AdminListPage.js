/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

class AdminList extends React.Component {
  componentDidMount() {
    const { admins, fetchAdmins: fetch } = this.props;
    if (!admins || admins.length < 1) fetch();
  }

  renderList() {
    const { admins } = this.props;
    return admins.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        Admins List (protected area)
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

function loadData(store) {
  return store.dispatch(fetchAdmins());
}

export default {
  loadData,
  component: connect(
    state => ({ admins: state.admins }),
    { fetchAdmins },
  )(AdminList),
};
