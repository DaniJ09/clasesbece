import app from "./app.js";

// puerto para escuchar
app.listen(app.get("port"), ()=>{
    console.log(`se ha conectado al puerto: ${app.get("port")} http://localhost:${app.get("port")}`);
})