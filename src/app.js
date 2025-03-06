const express = require("express")

const app = express();


app.get("/user",(req,res)=>{
    res.send({firstName:"Duregsh", lastName:"Agrahari"});
})
app.post("/user",(req,res)=>{
    console.log("Save Data to Database");
    res.status(200).json("Data successfully save to the database");
})

app.delete("/user",(req,res)=>{
    res.send("User deleted successfully!")
})

app.use("/test",(req,res)=>{
    res.send("Hello from the server!!")
})

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...")
})