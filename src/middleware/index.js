const bcrypt = require("bcrypt");
const { findOne } = require("../user/userModels");
const User = require("../user/userModels")

exports.hashpassword = async (req, res, next) => {
    try{ 
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next()
    }catch (error) {
        console.log(error);
        res.status(500).send({message: "Unseccessful please try again"})
    }
}

exports.compare = async (req,res) => {
    try {
        const user = await User.findOne({username:req.body.username});
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match){
            res.status(500).send({message: "incorrect login"})
        }
        res.status(200).send({message: "successfuly loggedin."})
    }catch (error){
    res.status(500).send({message: "Unsuccessful, please try again."})
    }
}