/**
 * Aqui a gente define o modulo typescript que conterá o objeto global
 * (utilizado pelo gas-webpack-plugin), o plugin gas-webpack-plugin faz um scan
 * por todas as funções declaradas em global e as define como funções principais do bundle gerado.
 * (para que quando dermos eval no JS gerado possamos chamá-las diretamente)
 */
declare namespace gasGlobalModule {
  interface global {
    print20Plus6(): void;
    getAuthor(): string;
  }
}

declare var global: gasGlobalModule.global;
