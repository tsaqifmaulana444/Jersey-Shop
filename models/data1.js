const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dataSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    content2: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Data1 = mongoose.model("Penjualan", dataSchema)
module.exports = Data1
