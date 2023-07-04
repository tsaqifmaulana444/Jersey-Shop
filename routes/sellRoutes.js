const express = require("express")
const Data1 = require("../models/data1")

const router = express.Router()

router.get("/", (req, res) => {
  Data1.find()
    .sort({ createdAt: 1 })
    .then((result) => {
      res.render("sell", { title: "Sell", datas: result })
    })
    .catch((e) => {
      console.log(e)
    })
})

router.get("/create", (req, res) => {
  res.render("create", { title: "Create" })
})

router.get("/:id", (req, res) => {
  const id = req.params.id
  Data1.findById(id)
    .then((result) => {
      res.render("detail", { title: "Sell", data: result })
    })
    .catch((e) => {
      console.log(e)
    })
})

router.get("/update/:id", (req, res) => {
  const id = req.params.id
  Data1.findById(id)
    .then((result) => {
      res.render("update", { title: "Update", data: result })
    })
    .catch((e) => {
      console.log(e)
    })
})

router.post("/", (req, res) => {
  const data = new Data1(req.body)
  data
    .save()
    .then((result) => {
      res.redirect("/sell")
    })
    .catch((e) => {
      console.log(e)
    })
})

router.post("/update/:id", (req, res) => {
  const id = req.params.id
  const updatedData = {
    title: req.body.title,
    content: req.body.content,
    content2: req.body.content2,
  }

  Data1.findByIdAndUpdate(id, updatedData)
    .then(() => {
      res.redirect("/sell")
    })
    .catch((error) => {
      console.log(error)
    })
})

router.delete("/:id", (req, res) => {
  const id = req.params.id
  Data1.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/sell" })
    })
    .catch((e) => {
      console.log(e)
    })
})

module.exports = router