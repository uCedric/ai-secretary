import app from "./app.js";
import http from "http";
import { initializeDB } from "./src/util/dbConn.js";

const server = http.createServer(app);
const port = 3000;
async function startServer(server, port){
    //initializeDB();

    /*
    To prevent loss the request data or status we need to handle while server is shutting down.
    graceful shutdown
        1.Handle process kill signal
        2.Stop new requests from client
        3.Close all data process
        4.Exit from process
    */

    server.listen(port, ()=>{
        
        console.log(`server is running on port ${port}`);
    });
}

startServer(server, port);