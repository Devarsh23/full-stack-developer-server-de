// const express = require('express');
import express from 'express';
import cors from 'cors';
import helloController
    from "./controller/hello-controller.js";
import userController   from "./controller/user-controller.js";
import tuitsController from "./controller/tuits-controller.js";
const app = express();
app.use(cors());
// app.get('/hello', (req, res) => {res.send('Life is Good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app)
app.listen(process.env.PORT || 4000);