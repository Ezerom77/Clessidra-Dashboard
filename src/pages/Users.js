import React, { Component } from "react";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: 0,
      lastUser: {},
    };
  }

  componentDidMount() {
    fetch("http://localhost:3050/api/usersCount")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ users: json.data });
      })
      .catch((error) => console.log(error));
    fetch("http://localhost:3050/api/lastUser")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ lastUser: json.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    console.log(this.state.users);
    console.log(this.state.lastUser);
    return (
      <div>
        <h1>Tenemos {this.state.users} Usuarios</h1>
        <h1>El último usuario registrado es: {this.state.lastUser.nombre} {this.state.lastUser.apellido}</h1>
        <h1>Su correo electronico es: {this.state.lastUser.email}</h1>
      </div>
    );
  }
}
export default Users;
