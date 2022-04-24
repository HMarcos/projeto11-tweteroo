# projeto11-tweteroo
  Construção da API do Tweteroo, um clone do Twitter, utilizando Node.js!

---

## Utilização

Para instalar as dependências, no diretório da aplicação, rode o comando:

```
npm install
```
---

## Funcionamento

Para ativar o servidor, no diretório da aplicação, execute:

```
node index.js
```
ou

```
npm start
```
Assim o servidor estará funcionando na **porta 5000**.

---

## Requisições

Ao todo o servidor responde a duas requisições:

* **POST** `/sing-up`, para realizar o cadastro na plataforma;
  * Body da requisição:
  ```javascript
    {
      username: "username",
      avatar: "link da imagem"
    }
  ```
* **POST** `/tweets`, para submeter um tweet;
  * Body da requisição:
  ```javascript
      {
        username: "username",
        tweet: "Tweet"
      }
  ```
* **GET** `/tweets`, para recuperar os 10 últimos tweets.
  * Resposta um array de tweets com o seguinte formato:
  ```javascript
      [
        {
          username: "username",
          avatar: "link da imagem",
          tweet: "Tweet"
        },
        .
        .
        .,
        {
          username: "username_10",
          avatar: "link da imagem 10",
          tweet: "Tweet 10"
        }        
      ]
  ```

