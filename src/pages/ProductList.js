import React, { Component } from "react";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      arrayDeP: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3050/api/products")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ arrayDeP: json.products });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        {this.state.arrayDeP.map((item) => {
          return (
            <p>
              Soy el producto {item.id}, mi nombre es {item.nombre}, soy Talle {item.talle.descripcion} y podes llevarme por ${item.precio} pesos
            </p>
          );
        })}
      </div>
    );
  }
}
export default ProductList;
