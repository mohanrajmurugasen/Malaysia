const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

router.use(cors());

process.env.SECRET_KEYS = "secrets";

router.post('/registers',(req,res) => {

    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    db.admin.findOne({
        where: {
            email: req.body.email
        }
    }).then(data => {
        if(!data) {
            bcrypt.hash(req.body.password, 10, (err,hash) => {
                userData.password = hash;
                db.admin.create(userData).then(user => {
                    res.send(user.email + "Registered");
                }).catch(err => {
                    res.send(err.message);
                })
            })
        } else {
            res.send("User already exist");
        }
    }).catch(err => {
        res.send(err.message);
    })
})

router.post('/logins', async (req,res) => {
    await db.admin.findOne({
        where:{
            email: req.body.email,
        }
    }).then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.password,user.password)) {
                let token = jwt.sign(user.name,process.env.SECRET_KEYS);
                res.send(token);
            } else {
                res.send("Password mismatch");
            }
        } else {
            res.send("User not exist");
        }
    }).catch(err => {
        console.error(err.message);
    })
})

module.exports = router;