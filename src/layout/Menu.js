import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuOptions } from '../utils';
import './Menu.scss';

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <ul>
          <li className="nav-item">
            <Link to="/">首页</Link>
          </li>
          {this.props.isLogin
            ? menuOptions
                .filter(({ permissionCode }) => this.props.permissions.includes(permissionCode))
                .map(({ name, path }) => (
                  <li className="nav-item" key={name}>
                    <Link to={path}>{name}</Link>
                  </li>
                ))
            : menuOptions.map(({ name, path }) => (
                <li className="nav-item" key={name}>
                  <Link to={path}>{name}</Link>
                </li>
              ))}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ profile: { permissions = [] } = {}, isLogin }) => ({
  permissions,
  isLogin
});

export default connect(mapStateToProps)(Menu);
