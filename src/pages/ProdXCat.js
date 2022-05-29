import React, { Component } from "react";

class ProdXCat extends Component {
  constructor() {
    super();
    this.state = {
      arrayDeP: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3050/api/prodXCat")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ arrayDeP: json.producto_categoria });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        {this.state.arrayDeP.map((item) => {
          return (
            <p>
              ({item.categorias.descripcion},{item.sumaProductos})
            </p>
          );
        })}
      </div>
    );
  }
}
export default ProdXCat;
