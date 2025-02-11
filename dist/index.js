"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_8lTRPSmzDIo0@ep-proud-breeze-a51krjr6-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");
pgClient.connect();
app.use(express_1.default.json());
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3);`;
        const response = yield pgClient.query(insertQuery, [username, email, password]);
        res.json({
            message: "user signup succesfuly"
        });
    }
    catch (error) {
        res.json({
            message: "error occured while signin"
        });
    }
}));
app.listen(3000);
// we can connect to postgress via two ways 
// 1. using connection string 
// 2. another one is way providing the details
// async function main(){
//     await pgClient.connect()
//     // const response = await pgClient.query("UPDATE users SET password = 'nandu' WHERE id= '3';");
//     const response = await pgClient.query("SELECT * from users;")
//     console.log(response);
// }
// main()
// import { Client } from 'pg'
// const client = new Client({
//     host: 'my.database-server.com',
//     port: 5334,
//     database: 'database-name',
//     user: 'database-user',
//     password: 'secretpassword!!',
//   })
//   async function main(){
//      await  client.connect()
//   }
// main()
