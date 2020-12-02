import localStorageService from "./LocalStorageService";

export const USUARIO_LOGADO = "_usuario_logado";

export default class AuthService {
  static isUsuarioAutenticado() {
    const cliente = localStorageService.obterItem(USUARIO_LOGADO);
    return cliente && cliente.id;
  }

  static removerUsuarioAutenticado() {
    localStorageService.removerItem(USUARIO_LOGADO);
  }

  static logar(usuario) {
    localStorageService.adicionarItem(USUARIO_LOGADO, usuario);
  }

  static obterUsuarioAutenticado() {
    return localStorageService.obterItem(USUARIO_LOGADO);
  }
}
