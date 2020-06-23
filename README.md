# gas-ts-hello

Prova de conceito que transpila código em TypeScript para um código que pode ser executado no GAS.

## building

- Clone este projeto
- Na pasta do projeto clonado, execute `npm install`
- Após instalar todas as dependências, execute `npm run build` para gerar o `dist/bundle.js`

## executando no GAS

- crie um Google App Script (GAS) qualquer
- defina uma função principal no script (a função executada pelo Google App)
- copie o código do `dist/bundle.js` antes da declaração da função principal.
- That's it. Todas as funções definidas no objeto `globla` deste projeto estarão visíveis
  na função principal do seu GAS.

## Ah, eu preciso importar este código de um ambiente remoto

Não tem problema. Teste o seguinte no seu código GAS:

```javascript
const external = `{codigo_do_dist/bundle.js}`;
eval(external);

/**
 * Sua função principal do GAS
 */
function myFunction() {
  print20Plus6();
  Logger.log(getAuthor());
}
```

![The end](https://i.ytimg.com/vi/wPoTBfRHKt4/maxresdefault.jpg)
