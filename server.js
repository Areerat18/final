const express = require('express')
const app = express();
const port = 5000;

app.get('/' ,(req, res)=>{
    res.send("Hello world hey hi");
})

app.get('/test', (req,res)=>{
    res.send("Test");
})

app.get('/test2', (req,res)=>{
    res.send("Test2");
})

app.get('/info', (req,res)=>{
    res.json({
        status: "success",
        message: 'complete',
        appName: 'helloworld',
    })
})

app.listen(port,()=>{
    console.log("server running",port);
});