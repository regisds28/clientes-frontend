import React from "react";

import Home from "./views/home";
import Login from "./views/login";
import CadastroCliente from "./views/cadastro-cliente";

import { AuthConsumer } from "./provedorAutenticacao";

import { Route, Switch, HashRouter, Redirect } from "react-router-dom";

function RotaAutenticada({
  component: Component,
  isUsuarioAutenticado,
  ...props
}) {
  return (
    <Route
      {...props}
      render={(componentPropos) => {
        if (isUsuarioAutenticado) {
          return <Component {...componentPropos} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: componentPropos.location },
              }}
            />
          );
        }
      }}
    />
  );
}
function Rotas(props) {
  return (
    <HashRouter>
      <Switch>
        <Route
          isUsuarioAutenticado={props.isUsuarioAutenticado}
          path="/login"
          component={Login}
        />
        <RotaAutenticada
          isUsuarioAutenticado={props.isUsuarioAutenticado}
          path="/home"
          component={Home}
        />
        <RotaAutenticada
          isUsuarioAutenticado={props.isUsuarioAutenticado}
          path="/cadastro-clientes"
          component={CadastroCliente}
        />
      </Switch>
    </HashRouter>
  );
}
export default () => (
  <AuthConsumer>
    {(context) =>
      // prettier-ignore
      <Rotas isUsuarioAutenticado={context.isAutenticado} />
    }
  </AuthConsumer>
);
