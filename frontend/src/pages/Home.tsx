import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import Product from "../interfaces/product";
import Footer from "../components/Footer";

const link =
  "https://espetinhodesucesso.com.br/wp-content/uploads/2021/11/O-que-fazer-com-caldo-de-carne-que-sobrou-pirao.jpg";

const example = [
  { id: "1", image: link, name: "caldo de mandioca", price: "123" },
  { id: "2", image: link, name: "caldo de mandioca", price: "123" },
  { id: "3", image: link, name: "caldo de mandioca", price: "123" },
  { id: "4", image: link, name: "caldo de mandioca", price: "123" },
];

export default function Home() {
  const [list, setList] = useState(example);
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);
  const addHandler = (product: Product) => {
    if (localStorage.getItem("cart")) {
      const cartStorage = localStorage.getItem("cart") || '';
      const cart = JSON.parse(cartStorage);
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  return (
    <main className="">
      <Header />
      <Filters
        calbackParent={(productList: Product[]) => setList(productList)}
      />
      <div className="flex mt-10">
        {list.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} width="400" height="250" />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={() => addHandler(item)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
