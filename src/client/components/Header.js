import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
const Header = ({ auth }) => {
  const authButton = auth ? (
    <a className="ui item" href="/api/logout">
      Logout
    </a>
  ) : (
    <a className="ui item" href="/api/auth/google">
      Login
    </a>
  );

  return (
    <div className="ui inverted large fixed menu">
      <Link className="item" to="/">
        React SSR
      </Link>
      <Link className="item" to="/users">
        Users
      </Link>
      <Link className="item" to="/admins">
        Admins
      </Link>
      <div className="right menu">{authButton}</div>
    </div>
  );
};

export default connect(({ auth }) => ({ auth }))(Header);
