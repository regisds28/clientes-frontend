import React from "react";
import NavBarItem from "./navbarItem";
import { AuthConsumer } from "../provedorAutenticacao";

function Navbar(props) {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="#/home" className="navbar-brand">
          Clientes
        </a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavBarItem
              render={props.isUsuarioAutenticado}
              href="#/home"
              label="Home"
            />
            <NavBarItem
              render={props.isUsuarioAutenticado}
              href="#/lista-clientes"
              label="Lista de Clientes"
            />
            <NavBarItem
              render={props.isUsuarioAutenticado}
              href="#/cadastro-clientes"
              label="Cadastrar Cliente"
            />
            <NavBarItem
              render={props.isUsuarioAutenticado}
              onClick={props.deslogar}
              href="#/login"
              label="Sair"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default () => (
  <AuthConsumer>
    {(context) => (
      <Navbar
        isUsuarioAutenticado={context.isUsuarioAutenticado}
        deslogar={context.encerrar}
      />
    )}
  </AuthConsumer>
);
