import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          {this.props.avatar && <img src={this.props.avatar} alt="头像" />}
          <span className="username">{this.props.name}</span>
          <a
            className="sign"
            onClick={this.props.isLogin ? this.props.onSignOut : this.props.onSignIn}
          >
            {this.props.isLogin ? 'Sign Out' : 'Sign In'}
          </a>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ profile, isLogin }) => {
  return {
    ...profile,
    isLogin
  };
};

const getUserData = () => {
  return fetch('https://my-json-server.typicode.com/kevindongzg/demo/login', {
    method: 'GET'
  }).then(response => response.json());
};

const mapDispatchToProps = dispatch => ({
  onSignIn() {
    getUserData().then(data => {
      dispatch(signIn(data));
    });
  },
  onSignOut() {
    dispatch(signOut);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
