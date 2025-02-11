import {Client} from "pg";
import express from "express";

const app = express()


const pgClient = new Client(postgres_uri)
pgClient.connect();
app.use(express.json())



app.post("/signup",async(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

   try {
    const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3);`
    const response = await pgClient.query(insertQuery,[username,email,password]);
    res.json({
        message : "user signup succesfuly"
    })
   } catch (error) {
    res.json({
        message : "error occured while signin"
    })
   }
})




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