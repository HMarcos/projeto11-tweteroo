// Importando as bibliotecas necessárias
import express, {json} from "express";
import cors from "cors";
import chalk from "chalk";

// Dados
const porta = 5000;

// Configurações do chalk para exibição de informações
const info = chalk.green.bold;

// Configurações do app
const app = express();
app.use(json());
app.use(cors());


app.listen(porta, 
    () => {
        console.log(info(`Servidor funcionando na porta ${porta}...`));
    }
    )