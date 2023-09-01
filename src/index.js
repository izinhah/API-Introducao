import roteadorUsuario from "./routes/usuario.js";
import dotenv from "dotenv";
import express from "express"; 
import roteadorLogin from "./routes/login.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(roteadorLogin);
app.use(express.json());
app.use(roteadorUsuario);

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: link_gitgub",
  });
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});



