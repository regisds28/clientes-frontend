import React, { Component } from "react";
import Rotas from "./routes";
import Navbar from "./components/navbar";
import ProvedorAutenticacao from "./provedorAutenticacao";

import "toastr/build/toastr.min.js";

import "bootswatch/dist/flatly/bootstrap.css";
import "./custom.css";
import "toastr/build/toastr.css";

export default class App extends Component {
  render() {
    return (
      <ProvedorAutenticacao>
        <Navbar />
        <div>
          <Rotas />
        </div>
      </ProvedorAutenticacao>
    );
  }
}
