import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Product from "../interfaces/product";

export default function Cart() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setList(JSON.parse(cart));
    }
  }, []);
  const totalHandler = () => {
    return list.reduce((acc, item: Product) => acc += Number(item.price), 0)
  }
  return (
    <div>
      <Header />
      {list.map((item: Product) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width="400" height="250" />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
      <p>Valor da compra:R${totalHandler()}</p>
      <button type="button">Finalizar Compra</button>
    </div>
  );
}
