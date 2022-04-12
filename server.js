// const express = require('express');
import * as tuitDao from "./controller/tuits/tuits-dao.js"
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helloController from "./controller/hello-controller.js";
import userController   from "./controller/user-controller.js";
import tuitsController from "./controller/tuits-controller.js";
mongoose.connect('mongodb://localhost:27017/webdev');
// mongoose.connect('mongodb://0.0.0.0:27017/webdev');
const app = express();
app.use(cors());
// app.get('/hello', (req, res) => {res.send('Life is Good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app)
console.log("hello");
app.listen(process.env.PORT || 4000);

