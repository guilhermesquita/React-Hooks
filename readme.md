## Caminho a ser trilhado
- Nostate.jsx (Contador sem usar useState)
- App.jsx (contador com useState)
- Effect.jsx (sobre o useEffect)

#

## React Hooks
Até a versão 16.7 do React algumas funcionalidades só eram possíveis de ser acessadas através de classes (como, por exemplo, o lifecycle). 

Apesar da possibilidade de criar componentes a partir de função, até essa versão, eles só recebiam propriedades, não podendo acessar todas as funcionalidades do React, como as classes. 

Na versão 16.8 do React, foram lançado os hooks, que permitem o uso de vários recursos de forma simples através de funções. Eles também ajudam a organizar a lógica utilizada dentro dos componentes.

#

## USE STATE:

A função useState recebe um parâmetro (o valor inicial do estado ou uma função
que retorna este valor) e retorna um array com duas posições, sendo a primeira
delas o valor do estado e a segunda uma função que será responsável por alterar
o valor deste estado.

Uma característica deste hook é que podemos, na função que atualiza o state (setName), enviar uma função como argumento e nesta função, capturar o valor atual do state (name) da mesma forma que fazíamos com
o setState nas classes.

#

## USE EFFECT

O useEffect também é uma função, porém, diferente do useState, esta não retorna nenhum valor, precisamos apenas invocá-la no corpo do componente. É um bom lugar para fazer requisições à APIs como fazíamos no componentDidMount, por exemplo. Seu uso é muito simples: ele recebe apenas dois parâmetros: uma função de efeito, e um array de dependências que pode receber variáveis ou funções e sempre que o valor de uma dessas variáveis sofre uma alteração ou uma das função deste array é remontada a função de efeito (primeiro parâmetro) é
executada novamente. 

#

