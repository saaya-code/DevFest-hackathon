import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import PocketBase from 'pocketbase';
const app = express();
import sha256 from 'crypto-js/sha256.js';
const PORT = process.env.PORT;
import 'cross-fetch/dist/node-polyfill.js';
import cors from 'cors'
app.use(cors())
app.use(express.json())

const client = new PocketBase('http://127.0.0.1:8090');

async function validateInputs(username, password){
    const resultList = await client.records.getList('login_credentials', 1, 1, {
        filter: `username = "${username}" && password = "${password}"`
    });
    if(resultList.totalItems == 0)
        return false
    return true
}
async function DoesntAlreadyExist(username){
    const resultList = await client.records.getList('login_credentials', 1, 1, {
        filter: `username = "${username}"`
    });

    if(resultList.totalItems == 0)
        return true
    return false
}



app.post("/login",async (req,res)=>{
    try{
    const {username, password} = req.body;
    if(await validateInputs(username ,password)){
       const hash = sha256(username+password+Date.now().toString()).toString()
       const data = {
            token:hash,
       }
       const record = await client.records.create('sessions',   data);
       //console.log(record)
       res.json(data).status(200)
    }else{
        res.json({"ERROR":"Inputs are invalid"}).status(404)
    }
    }catch(err){
        console.error(err)
        res.json({"ERROR":"INTERNAL SERVER ERROR"}).status(500)
    }   
})
app.post("/signup",async(req,res)=>{
    try{
    const {username, password} = req.body;
    if(await DoesntAlreadyExist(username)){
        const data = {username, password}
        const record = await client.records.create('login_credentials', data);
        res.json(record).status(200)
    }else{
        res.json({"ERROR":"USERNAME ALREADY TAKEN"}).status(400)    
    }
    }catch(err){
        console.error(err)
        res.json({"ERROR":"INTERNAL SERVER ERROR"}).status(500)
    }
})



app.listen(PORT,()=>{
    console.log("Connected to DB");
    console.log(`listening on port ${PORT}`);
})