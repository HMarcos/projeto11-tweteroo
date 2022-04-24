// Importando as bibliotecas necessárias
import express, { json, response } from "express";
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
)

app.listen(porta,
    () => {
        console.log(info(`Servidor funcionando na porta ${porta}...\n`));
    }
)