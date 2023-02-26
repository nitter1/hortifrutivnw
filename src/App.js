import React, { Component } from "react";
import "./App.css";
import Alface from "./img/alface.svg";
import Laranja from "./img/laranja.svg";
import Cereja from "./img/cereja.svg";
import Cenoura from "./img/cenoura.svg";
import Manga from "./img/manga.svg";
import Limao from "./img/limao.svg";
import Beterraba from "./img/beterraba.svg";
import Tomate from "./img/tomate.svg";
import Carrinho from "./img/carrinho.svg";
import Rectangle from "./img/Rectangle.svg";
import RectangleTwo from "./img/RectangleTwo.svg";
import RectangleThree from "./img/RectangleThree.svg";
import MinusCircle from "./img/MinusCircle.svg";
import PlusCircle from "./img/PlusCircle.svg";
class App extends Component {
  state = {
    frutas: [
      {
        fruta: `${Alface}`,
        title: "Alface",
      }, //index 0
      {
        fruta: `${Laranja}`,
        title: "Laranja",
      }, //index 1
      {
        fruta: `${Cereja}`,
        title: "Cereja",
      }, //index 2
      {
        fruta: `${Cenoura}`,
        title: "Cenoura",
      }, //index 3
      {
        fruta: `${Manga}`,
        title: "Manga",
      }, //index 4
      {
        fruta: `${Limao}`,
        title: "Limão",
      }, //index 5
      {
        fruta: `${Beterraba}`,
        title: "Beterraba",
      }, //index 6
      {
        fruta: `${Tomate}`,
        title: "Tomate",
      }, //index 7
    ],
    carrinho: [
      {
        retangulo: `${Rectangle}`,
        retanguloDois: `${RectangleTwo}`,
        retanguloTres: `${RectangleThree}`,
        carrinho: `${Carrinho}`,
      },
    ],
  };

  render() {
    return (
      <div className="body">
        <div className="logo">
          <h1 className="siteLogo">Hortifruti</h1>
          <h2 className="subtitleLogo">VnW</h2>
        </div>
        <h3 className="catalogo">Nossos Produtos</h3>
        <section className="main">
          <div className="horta">
            {this.state.frutas.map((item) => (
              <div className="box">
                <img
                  className="frutas"
                  src={item.fruta}
                  alt={item.title}
                  width="100%"
                />
              </div>
            ))}
          </div>
          <div className="carrinho">
            <div>
              <img src={Rectangle} width="95%" alt="Retângulo" />
              <div className="rectangleTwo">
                <img src={RectangleTwo} width="80%" alt="Retângulo" />
                <img
                  className="carrinhoLogo"
                  src={Carrinho}
                  width="20%"
                  alt="Logotipo do Carrinho de compras"
                />
                <p className="pCarrinho">
                  Arraste o seu produto aqui para colocar no carrinho
                </p>
              </div>
              <div className="rectangleThree">
                <img src={RectangleThree} alt="Retângulo" />
                <img
                  className="minusCircle"
                  src={MinusCircle}
                  alt="Botão remover"
                />
                <img
                  className="plusCircle"
                  src={PlusCircle}
                  alt="Botão adicionar"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
