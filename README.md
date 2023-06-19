<h1 align="center">Desafio MXM - Frontend</h1>

# Sumário

- [Descrição](#Descrição)
- [Desafios](#Desafios)
- [Features](#Features)
- [Tecnologias Utilizadas](#Tecnologias-Utilizadas)
- [Autor](#Autor)

# Descrição

Aplicação frontend desenvolvida para o Desafio MXM, com a finalidade de consumo das funcionalidades de Grupo Patrimonial, Subgrupo Patrimonial e Status do Processamento, a partir da API da MXM.

# Features

- [x] Grupo Patrimonial (Listagem, informações, Criação e Edição)
- [x] Subgrupo Patrimonial (Listagem e informações)
- [x] Status do Processamento (Consulta)

# Desafios

Durante o desenvolviemento deste projeto, os maior desafio consistiram em conseguir encontrar uma maneira de consumir os endpoints do tipo GET com body a partir do frontend Client Side Rendered. Isso porque o objeto da API dos browsers modernos (XmlHttpRequest) responsável por fazer as requisições, ignora automaticamente o corpo das mesmas.

Além disso, foi preciso resolver a problemática dos dados sensíveis da autenticação que são repassados a cada nova requisição. Pois os mesmos não poderiam ser persistidos, como geralmente faz-se com os tokens JWT temporários por exemplo. 

# Tecnologias Utilizadas

- TypeScript
- Angular

# Uso

O consumo pode ser feito diretamente pelo cliente de escolha do usuário ao serviço hospedado, com documentação disponível a partir do endereço abaixo:

```
https://mxm-desafio-frontend-man4j4fmwa-rj.a.run.app/
```

Para uso local, o usuário deve fazer a clonagem do repositório, garantir que o NodeJS está instalado na máquina, e executar os seguintes comandos:
```
npm install
npm start
```

# Autor

<img src="https://avatars.githubusercontent.com/u/49618629?v=4" alt="ProfilePicture" title="ProfilePicture" width="200px" height="200px" />

[Alexandre Lima](https://github.com/chandelima) &#128640;
