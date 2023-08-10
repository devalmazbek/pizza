import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/couter/counter";

import { pizzaData } from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <Counter />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizza = pizzaData;
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {pizza.length ? (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            laudantium, eaque doloribus impedit distinctio provident earum neque
            cupiditate id consectetur, et dolorem blanditiis, similique sed
            commodi unde quia rerum veritatis.
          </p>
          <ul className="pizzas">
            {pizza.map((item) => {
              return <Pizza item={item} key={item.name} />;
            })}
          </ul>
        </>
      ) : (
        <h3>We are work with our menu.</h3>
      )}
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 8;
  const close = 19;
  const isOpen = hour >= open && hour <= close;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We are cureently open. Open until {close}</p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p>
          We are happy to welcome you between {open} and {close}
        </p>
      )}
    </footer>
  );
}

function Pizza({ item }) {
  const { name, photoName, ingredients, price, soldOut } = item;
  // console.log(item);
  // console.log(name);
  return (
    <li className={`pizza${soldOut ? " sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
