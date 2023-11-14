const express = require("express")
const app = express();
const path = require("path")
const hbs = require("hbs")

const collection = require("./mongoose")

const templatePath = path.join(__dirname, '../templates')

app.use(express.json())
app.set("view engine" , "hbs")
app.set("views" , templatePath)
app.use(express.urlencoded({extended:false}))


app.get("/" , (req,res)=>{

    res.render("login")

})




app.get("/sinup" ,(req,res)=>{
    res.render("sinup")
})

app.post("/sinup" ,async (req,res)=>{

    const data = {
        name:req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data])
    res.render("home")
})



app.listen(3000 , ()=>{
    console.log("port connected")
    
})
