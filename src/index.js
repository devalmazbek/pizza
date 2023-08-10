import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./components/couter/counter";

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
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
        photoName="pizzas/focaccia.jpg"
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        photoName="pizzas/margherita.jpg"
      />
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
      {`${isOpen ? "We are cureently open." : "Closed"}`}
    </footer>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
