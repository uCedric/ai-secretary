import app from "./app";
import http from "http";
import { initializeDB } from "./util/dbConn.js";

const server = http.createServer(app);

async function startServer(server, port){
    initializeDB();

    /*
    To prevent loss the request data or status we need to handle while server is shutting down.
    graceful shutdown
        1.Handle process kill signal
        2.Stop new requests from client
        3.Close all data process
        4.Exit from process
    */

    server.listen(port, ()=>{
        console.log(`Server is running on port ${port}`);
    });
}

startServer(server, port);