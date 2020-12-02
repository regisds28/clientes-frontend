import React from "react";

import { AuthContext } from "../provedorAutenticacao";
import UsuarioService from "../app/usuarioService";

class Home extends React.Component {
  state = {
    nome: "",
  };

  constructor() {
    super();
    this.usuarioService = new UsuarioService();
  }

  componentDidMount() {
    const usuarioLogado = this.context.usuarioAutenticado;

    this.usuarioService
      .obterIdCliente(usuarioLogado.id)
      .then((response) => {
        this.setState({ nome: response.data.nome });
      })
      .catch((error) => {
        console.error(error.response);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">Bem vindo, {this.state.nome}</h1>
          <p className="lead">
            <a
              className="btn btn-primary btn-lg"
              href="#/cadastro-clientes"
              role="button"
            >
              <i className="fa fa-users"></i> Cadastrar Cliente
            </a>
            <a
              className="btn btn-danger btn-lg"
              href="#/listar-clientes"
              role="button"
            >
              <i className="fa fa-users"></i> Listar Cliente
            </a>
          </p>
        </div>
      </div>
    );
  }
}

Home.contextType = AuthContext;

export default Home;
