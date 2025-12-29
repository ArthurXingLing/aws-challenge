import express from "express";
import cors from "cors";
import { createServer } from "http";
import usuarios from "./routes/usuarios_rota.js";

const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

const server = createServer(app);

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use("/usuarios", usuarios);

server
  .listen(PORT, HOST, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  })
  .on("error", (err) => {
    console.error("Erro ao iniciar:", err);
  });

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Servidor encerrado");
  });
});