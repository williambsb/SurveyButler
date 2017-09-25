import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends Component {
  renderNav() {
    // Set up auth cases
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      // User is logged in
      default:
        // Returning arrays require keys
        return [
          <li key="payments">
            <a>
              <Payments />
            </a>
          </li>,
          <li key="logout">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo"
              style={{ marginLeft: '0.5em' }}
            >
              SurveyButler
            </Link>
            <ul className="right">{this.renderNav()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
