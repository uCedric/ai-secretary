import pg from 'pg';

class DB {
   constructor() {

   }
}

export default class DatabaseSingleton{
    constructor(){
        console.log("Use DatabaseSingleton.getInstance() instead of new DatabaseSingleton()");
    }

    static getInstance({ host, port, user, password, name } = {}){
        if(!DatabaseSingleton.instance){
            DatabaseSingleton.instance = new DB();
            console.info("DB connection singleton is created");
        }

        return DatabaseSingleton.instance;
    }
};

export const initializeDB = () => DatabaseSingleton.getInstance({ host, port, user, password, name });