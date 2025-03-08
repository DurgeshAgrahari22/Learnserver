const express = require("express")

const app = express();

// : means dynamic routing

app.use("/user",(req,res,next)=>{
    // this is route handler function1
    console.log("Handeling response1");
    next()
    res.send("Hello from the server!!")
},
(req,res)=>{
    // this is route handler function2
    console.log("Handeling response2");
    res.send("Hello from the server2!!")
})

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...")
})