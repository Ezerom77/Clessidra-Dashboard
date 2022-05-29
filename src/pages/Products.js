import React, { Component } from "react";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: 0,
      lastProduct: {},
    };
  }

  componentDidMount() {
    fetch("http://localhost:3050/api/productsCount")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ products: json.data });
      })
      .catch((error) => console.log(error));
    fetch("http://localhost:3050/api/lastProduct")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ lastProduct: json.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    console.log(this.state.products);
    console.log(this.state.lastProduct);
    return (
      <div>
        <p>Tenemos {this.state.products} productos</p>
        <p>El último producto registrado es: {this.state.lastProduct.nombre} </p>
        <p>Precio: {this.state.lastProduct.precio}</p> 
        <p>Descripción: {this.state.lastProduct.descripcion}</p> 
      </div>
    );
  }
}
export default Products;
