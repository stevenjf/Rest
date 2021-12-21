const User = require("./userModels")
const userRouter = require("./userRoutes")

exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({message: "successfully added user", newUser})
    }catch (error) {
        res.status(500).send({message: "Unsuccessful, please try again."})
    }
}


exports.listUser = async (req, res) => {
    try {
        res.status(200).send(await User.find({}));
    }catch (error) {
        console.log(error)
    }
}

exports.updateUser = async (req, res) => {
    try {
        updateUser = await User.findByIdAndUpdate(req.body._id, req.body);
        const user = await User.findById(req.body._id);
        res.status(200).send({message: "successfully updated user", user})
    }catch (error) {
        res.status(500).send({message: "Unsuccessful, please try again."})
    }
}


exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.body._id);
        res.status(200).send({message: "successfully deleted user"})
    }catch (error) {
        res.status(500).send({message: "Unsuccessful, please try again."})
    }
}

