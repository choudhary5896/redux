const express=require("express")

const cors=require("cors");

const app=express();

// app.use(express.json());
bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cors());

app.post("/api/users/:id/update",(req,res)=>{
    console.log(req.body);
    setTimeout(()=>{
        res.send(req.body);
    },[2000]);
    // res.send(req.body);
})

app.listen(8800,()=>{
    console.log("server is running on port 8000");
})