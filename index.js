const express = require("express") 
const mongoose = require("mongoose")

const UserRoute = require("./routes/UserRoute")

const mongoCompass = "mongodb://localhost:27017/Db_testing"
const mongoATalas = "mongodb+srv://ayoolazeez2331_db_user:Ayoola2331@cluster0.baw9arn.mongodb.net/Db_testing?appName=Cluster0"


mongoose.connect (mongoCompass).then(()=> console.log("Database Connected")).catch(()=> console.log("Connection Error : ",err))

const port = 2331
const app = express()


app.use(express.json())

app.get("/",(req,res)=>{
    res.send    ("we active")

})
app.use("/user", UserRoute)
app.listen(port,()=>{
    console.log("server is running on 2331")
})