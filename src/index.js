// Importando as bibliotecas necessárias
import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";

// Dados
const usuarios = [];
const tweets = [];
const porta = 5000;

// Configurações do chalk para exibição de informações
const info = chalk.green.bold;
const debug = chalk.green.blue;

// Configurações do app
const app = express();
app.use(json());
app.use(cors());

// Métodos POST e GET
app.post("/sign-up",
    (req, res) => {
        const body = req.body;
        console.log(debug("Informação recebida: "), body, "\n");

        const novoUsuario = {
            username: body.username,
            avatar: body.avatar
        }

        usuarios.push(novoUsuario);

        res.send("OK");

        console.log(info(`Usuario ${novoUsuario.username} cadastrado com sucesso...\n`));
    }
);

app.post("/tweets",
    (req, res) => {
        const body = req.body;
        console.log(debug("Informação recebida: "), body, "\n");

        const usuario = usuarios.find(
            (usuario) => {
                return usuario.username === body.username;
            }
        );

        const novoTweet = {
            ...usuario,
            tweet: body.tweet
        }

        tweets.unshift(novoTweet);
        
        res.send("OK");

        console.log(info("Novo Tweet cadastrado com sucesso: "), novoTweet, "\n");
    }
)

app.get("/tweets", 
    (req, res) => {
        console.log(info("Enviando os 10 últimos tweets...\n"));

        const ultimosDezTweets = tweets.slice(0, 10);
        res.send(ultimosDezTweets);
    }
)

// Rodando o servidor
app.listen(porta,
    () => {
        console.log(info(`Servidor funcionando na porta ${porta}...\n`));
    }
)