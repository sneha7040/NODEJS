const express = require("express");
const mongoose = require("mongoose");



const subjectSchema = new mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    quatity: Number,
    designer: String,
    active: Boolean,
    date: {
      type: Date,
      default: Date.now(),
    },
  });

const rank = new mongoose.model("rank",subjectSchema);
module.exports= rank;