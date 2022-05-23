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
        <h1>Tenemos {this.state.products} productos</h1>
        <h1>El último usuario registrado es: {this.state.lastProduct.nombre} </h1>
        <h1>Precio: {this.state.lastProduct.precio}</h1> 
        <h1>Descripción: {this.state.lastProduct.descripcion}</h1> 
      </div>
    );
  }
}
export default Products;
