# MoviesApp

Esse aplicativo foi desenvolvido com base em um teste prático para a empresa Ploomes.

É uma aplicação de visualização de filmes, na tela inicial temos uma lista de filmes, ao clicar em um deles, você é redirecionado para uma tela de detalhes, onde é possível ver seu elenco, genêros, etc.

Além disso é possível realizar uma pesquisa de filme filtrando por nome.

Para rodar o projeto é necessários os seguintes passos:

# 1
Clone o projeto da maneira que preferir.

# 2
No arquivo src/api/index.tsx insira na variável "privateToken" a sua chave da api (v3 auth).

# 3
Execute usando o expo com o comando:

Android
```
yarn expo start
```

IOS
```
yarn expo start --tunnel
```