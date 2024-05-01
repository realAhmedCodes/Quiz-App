const PORT = process.env.PORT || 8000;
const express = require("express")

const cors = require("cors");
const app= express()


const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")
app.use(cors())
app.use(express.json())
