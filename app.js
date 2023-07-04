const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const sellRoutes = require("./routes/sellRoutes")
const Data1 = require("./models/data1")


const dbURI =
  "mongodb+srv://ali-farid:Saturnuss1@cluster0.ambpbs1.mongodb.net/db1?retryWrites=true&w=majority"

mongoose
  .connect(dbURI)
  .then((result) => app.listen(8000))
  .catch((err) => console.log(err))

const app = express()

// view engine
app.set("view engine", "ejs")

app.use(express.static("static"))
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.get("/", (req, res) => {
  Data1.countDocuments()
  .then((count) => {
    res.render("index", { title: "Home", count })
  })
  .catch((e) => {
    console.log(e);
  });
})

app.get("/about", (req, res) => {
  res.render("about", { title: "About" })
})

app.use("/sell", sellRoutes)

// 404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" })
})
