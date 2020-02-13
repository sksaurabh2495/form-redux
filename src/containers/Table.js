import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../actions/actionCreator";
import { bindActionCreators } from "redux";
import "../App.css";

class Table extends Component {

  render() {
    return (
      <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12">
        {this.props.users.length !== 0 ? (
          <table className="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.map(user => (
                <tr key={user.id}>
                  <td data-key={user.id}>
                    {user.name}
                  </td>
                  <td>
                    {user.email}
                  </td>
                  <td>
                    {user.role}
                  </td>
                  <td>
                    <span className="fas fa-minus-circle" onClick={() => this.props.deleteUser(user.id)} style={{color: "white",fontSize: "20pt",marginRight: "20px",cursor: "pointer"}} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ marginTop: "50px" }} className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1">
            <div className="alert alert-danger" role="alert">
              User List is empty
            </div>
          </div>
        )}{" "}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteUser
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
