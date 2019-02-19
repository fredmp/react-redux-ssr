import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
const Header = ({ auth }) => {
  console.log(auth);

  const authButton = auth ? <a href="/api/logout">Logout</a> : <a href="/api/auth/google">Login</a>;

  return (
    <div>
      <Link to="/">React SSR</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {authButton}
      </div>
    </div>
  );
};

export default connect(({ auth }) => ({ auth }))(Header);
