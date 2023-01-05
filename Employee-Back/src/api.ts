import express, { Router } from "express";

const app = express ();
const router = Router();
const jwt = require('jsonwebtoken')

const data = {
    email: "riya@gmail.com",
    password: "123456"
}

const emplistobj = require('./emplist.json')

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized Request1')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token == 'null') {
        return res.status(401).send('Unauthorized Request2')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
        return res.status(401).send('Unauthorized Request3')
    }
    req.userData = payload.subject
    next()
}

router.get('/',(req, res) =>{
    res.send('From API route');
})

router.post('/login', (req, res) => {
    let userData = req.body
    console.log(userData)
    if(data.email == userData.email && data.password == userData.password){
        let payload = { subject: userData }
        let token = jwt.sign(payload, 'secretKey')
        console.log(userData)
        res.status(200).send({token})
    } else {
        res.status(401).send("Invalid")
    }
})

router.get('/emplist', verifyToken, (req, res) => {
    res.status(200).send(emplistobj)
})


module.exports = router