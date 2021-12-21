const { Router } = require("express");
const { addUser, listUser,updateUser,deleteUser } = require("./userController");
const {hashpassword,compare,checkEmail} = require("../middleware");
const User = require("./userModels");
const userRouter = Router();

userRouter.post("/user", hashpassword, addUser);
userRouter.get("/user", listUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);
userRouter.get("/login",compare)
userRouter.get("/checkEmail",checkEmail)

module.exports = userRouter;