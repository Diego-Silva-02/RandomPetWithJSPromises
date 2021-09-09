# This is a readme about the study of promises

## Promises
* Promise é um objeto que representa o sucesso ou a falha de uma operação assíncrona.
* Uma Promise pode envolver encapsular uma função assíncrona.

* __Vantagens de utilizar promises__:
    1. Mais controle e legibilidade no fluxo de lógicas assíncronas.
    2. Reduz o acoplamento entre funções de callback.
    3. Maior previsibilidade e detalhamento no tratamento de erros.

### Método then
* Uma promise possui o método __then__, onde, este método é responsável por receber a __resposta de sucesso da promise__.
    * Um método then __sempre retorna uma nova promise__ que por sua vez possui um método __then__, ou seja, um método __then__ pode ser encadeado por outro método __then__ quantas vezes forem necessárias.

### Método catch
* Método responsável pelo __tratamento de erros de uma promise__.
* Só é executado em 2 casos:
    1. Quando o método __reject__ na declaração da função é invocado.
    2. Quando o código dentro de algum __then__ retorna um erro.

### Método fetch
* Faz uma requisição HTTP e traz os dados da url especificada como argumento.