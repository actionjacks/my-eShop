import React from "react";
import "../styles/Home.css";
import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="./main_banner.jpg" alt="" />
        <div className="home__row">
          <Product
            id="1"
            title="Stabbass"
            price={(99, 99)}
            image="https://www.games-workshop.com/resources/catalog/product/threeSixty/99120209046_GitzGrotsStabbas3360/01.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Fanatics"
            price={(89, 88)}
            image="https://www.games-workshop.com/resources/catalog/product/threeSixty/99120209055_GitzFanatics1360/01.jpg"
            rating={5}
          />
          <Product
            id="3"
            title="Skragrott"
            price={120}
            image="https://www.games-workshop.com/resources/catalog/product/920x950/99120209051_SkragrottLoonking01.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">{/*  */}</div>
        <div className="home__row">{/*  */}</div>
      </div>
    </div>
  );
}

export default Home;
