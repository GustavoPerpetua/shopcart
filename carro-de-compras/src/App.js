import { Component } from "react";
import Productos from "./components/Productos";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpeg" },
      { name: "Arbejas", price: 900, img: "/productos/arbejas.jpeg" },
      { name: "Lechuga", price: 800, img: "/productos/lechuga.jpeg" },
      { name: "Cebolla", price: 400, img: "/productos/cebolla.jpeg" },
      {
        name: "Cebollamorada",
        price: 750,
        img: "/productos/cebollamorada.jpeg",
      },
      { name: "Echalote", price: 950, img: "/productos/echalote.jpeg" },
      { name: "Repollo", price: 800, img: "/productos/repollo.jpeg" },
      { name: "Zanahoria", price: 600, img: "/productos/zanahoria.jpeg" },
      { name: "Anko", price: 1550, img: "/productos/anko.jpeg" },
      { name: "Calabaza", price: 1000, img: "/productos/calabaza.jpeg" },
      { name: "Ajo", price: 2500, img: "/productos/ajo.jpeg" },
      {
        name: "Cebollaverdeo",
        price: 870,
        img: "/productos/cebollaverde.jpeg",
      },
      { name: "Ciboullete", price: 1950, img: "/productos/ciboullete.jpeg" },
      { name: "Hongos", price: 2500, img: "/productos/hongos.jpeg" },
      { name: "Pepino", price: 870, img: "/productos/pepino.jpeg" },
      { name: "Perejil", price: 550, img: "/productos/perejil.jpeg" },
      { name: "Pimiento", price: 3000, img: "/productos/pimiento.jpeg" },
      { name: "Zuccini", price: 1150, img: "/productos/zuccini.jpeg" },
      { name: "Berenjena", price: 1050, img: "/productos/berenjena.jpeg" },
    ],
  };
  render() {
    return (
      <div>
        <Productos
          agregarAlCarro={() => console.log("no hace nada")}
          productos={this.state.productos}
        />
      </div>
    );
  }
}

export default App;
