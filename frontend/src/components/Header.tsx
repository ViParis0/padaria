import { NavLink } from "react-router-dom";
import "./Header.css"

export default function Header() {
  return (
    <header className="position:  w-full">
      <nav>
        <NavLink to="/">Home</NavLink>
        <input type="text" placeholder="Pesquisar..."/>
        <NavLink to="/cart">carrinho</NavLink>
        <NavLink to="/login">entrar</NavLink>
      </nav>
    </header>
  )
};