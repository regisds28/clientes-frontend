import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import UsuarioService from "../app/usuarioService";

import { mensagemErro } from "../components/toastr";

import { AuthContext } from "../provedorAutenticacao";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  state = {
    usuario: "",
    senha: "",
  };

  constructor() {
    super();
    this.service = new UsuarioService();
  }

  entrar = () => {
    this.service
      .autenticar({
        usuario: this.state.usuario,
        senha: this.state.senha,
      })
      .then((response) => {
        this.context.iniciarSessao(response.data);
        this.props.history.push("/home");
      })
      .catch((erro) => {
        mensagemErro(erro.response.data);
      });
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
              <Card title="login">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bs-component">
                      <form>
                        <fieldset></fieldset>
                        <FormGroup
                          label="usuario"
                          htmlFor="exampleInputUsuario1"
                        >
                          <input
                            type="usuario"
                            value={this.state.usuario}
                            onChange={(e) =>
                              this.setState({ usuario: e.target.value })
                            }
                            className="form-control"
                            id="exampleInputUsuario1"
                            aria-describedby="usuarioHelp"
                            placeholder="Digite o usuário"
                          />
                        </FormGroup>
                        <FormGroup
                          label="Senha"
                          htmlFor="exampleInputPassword1"
                        >
                          <input
                            type="password"
                            value={this.state.senha}
                            onChange={(e) =>
                              this.setState({ senha: e.target.value })
                            }
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Digite a Senha"
                          />
                        </FormGroup>

                        <button
                          onClick={this.entrar}
                          type="button"
                          className="btn btn-success"
                        >
                          Entrar
                        </button>
                      </form>
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

Login.contextType = AuthContext;

export default withRouter(Login);
