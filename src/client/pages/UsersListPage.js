import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';
class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }
  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length.toString()} Users loaded`}</title>
        <meta property="og:type" content="Users App" />
      </Helmet>
    );
  }
  render() {
    return (
      <div>
        {this.head()}
        List of Users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UserList),
  loadData,
};
