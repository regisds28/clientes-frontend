import ApiService from "./apiservice";

class UsuarioService extends ApiService {
  constructor() {
    super("/clientes/cliente");
  }

  autenticar(credenciais) {
    return this.post("/autenticar", credenciais);
  }

  obterIdCliente(id) {
    return this.get(`/${id}`);
  }

  salvar(cliente) {
    return this.post("/", cliente);
  }
}

export default UsuarioService;
