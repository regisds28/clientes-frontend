import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";

import UsuarioService from "../app/usuarioService";
import { mensagemErro, mensagemSucesso } from "../components/toastr";
import { withRouter } from "react-router-dom";

class CadastroCliente extends React.Component {
  state = {
    nome: "",
    usuario: "",
    senha: "",
    email: "",
    cpf: "",
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    uf: "",
  };

  constructor() {
    super();
    this.service = new UsuarioService();
  }

  cadastrar = () => {
    const {
      nome,
      usuario,
      senha,
      email,
      cpf,
      vep,
      logradouro,
      bairro,
      cidade,
      uf,
    } = this.state;

    const cliente = {
      nome,
      usuario,
      senha,
      email,
      cpf,
      vep,
      logradouro,
      bairro,
      cidade,
      uf,
    };

    this.service
      .salvar(cliente)
      .then((response) => {
        mensagemSucesso("Cliente cadastrado com sucesso");
        this.props.history.push("/home");
      })
      .catch((erro) => {
        mensagemErro(erro.response.data);
      });
  };

  cancelar = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-md-6"
            style={{ position: "relative", left: "300px" }}
          >
            <div className="bs-docs-section">
              <Card title="Cadastro de cliente">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bs-component">
                      <FormGroup label="Nome" htmlFor="nome">
                        <input
                          type="text"
                          value={this.state.nome}
                          onChange={(e) =>
                            this.setState({ nome: e.target.value })
                          }
                          className="form-control"
                          id="nome"
                          placeholder="Digite o nome"
                        />
                      </FormGroup>
                      <FormGroup label="usuario" htmlFor="usuario">
                        <input
                          type="text  "
                          value={this.state.usuario}
                          onChange={(e) =>
                            this.setState({ usuario: e.target.value })
                          }
                          className="form-control"
                          id="usuario"
                          placeholder="Digite o usuario"
                        />
                      </FormGroup>
                      <FormGroup label="senha" htmlFor="senha">
                        <input
                          type="password"
                          value={this.state.senha}
                          onChange={(e) =>
                            this.setState({ senha: e.target.value })
                          }
                          className="form-control"
                          id="senha"
                          placeholder="Digite a senha"
                        />
                      </FormGroup>
                      <FormGroup label="email" htmlFor="email">
                        <input
                          type="email"
                          value={this.state.email}
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                          className="form-control"
                          id="email"
                          placeholder="Digite o email"
                        />
                      </FormGroup>
                      <FormGroup label="cpf" htmlFor="cpf">
                        <input
                          type="text"
                          value={this.state.cpf}
                          onChange={(e) =>
                            this.setState({ cpf: e.target.value })
                          }
                          className="form-control"
                          id="cpf"
                          placeholder="Digite o cpf"
                        />
                      </FormGroup>
                      <FormGroup label="cep" htmlFor="cep">
                        <input
                          type="text"
                          value={this.state.cep}
                          onChange={(e) =>
                            this.setState({ cep: e.target.value })
                          }
                          className="form-control"
                          id="cep"
                          placeholder="Digite o cep"
                        />
                      </FormGroup>
                      <FormGroup label="logradouro" htmlFor="logradouro">
                        <input
                          type="text"
                          value={this.state.logradouro}
                          onChange={(e) =>
                            this.setState({ logradouro: e.target.value })
                          }
                          className="form-control"
                          id="logradouro"
                        />
                      </FormGroup>
                      <FormGroup label="bairro" htmlFor="bairro">
                        <input
                          type="text"
                          value={this.state.bairro}
                          onChange={(e) =>
                            this.setState({ bairro: e.target.value })
                          }
                          className="form-control"
                          id="bairro"
                        />
                      </FormGroup>
                      <FormGroup label="cidade" htmlFor="cidade">
                        <input
                          type="text"
                          value={this.state.cidade}
                          onChange={(e) =>
                            this.setState({ cidade: e.target.value })
                          }
                          className="form-control"
                          id="cidade"
                        />
                      </FormGroup>
                      <FormGroup label="uf" htmlFor="uf">
                        <input
                          type="text"
                          value={this.state.uf}
                          onChange={(e) =>
                            this.setState({ uf: e.target.value })
                          }
                          className="form-control"
                          id="uf"
                        />
                      </FormGroup>
                      <button
                        type="button"
                        onClick={this.cadastrar}
                        className="btn btn-success"
                      >
                        Salvar
                      </button>
                      <button
                        type="button"
                        onClick={this.cancelar}
                        className="btn btn-default"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CadastroCliente);
