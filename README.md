## Students Finder Backend
BFF(backend-for-frontend) do projeto students finder, utiliza graphql e nestjs em sua composição

### Rodando o local

  #### Instalação
  Este projeto utiliza docker em sua composição, para roda-lo, é uma dependencia obrigatória.

  1. Copie o .env.example e renomeie para .env
  2. execute o comando ```docker compose up```


  ### Migrations
  Para criar as tabelas do projeto as migrations devem ser executas
  1. Abra o container(docker exec -it id_do_container bash)
  2. ``` yarn migrate ``` 