const { json } = require('express');
const baseResponse = require('../../helper/baseResponse/baseResponse')
const User = require('./authenication.schema');
const {hashPassword} = require('../../helper/bcrypt/bcrypt');


const createUser = async(req, res) => {
    try {
        const {first_name, last_name, email, password} = req.body
        const userExists = await User.exists({email})
        if(userExists) return res.status(400).json(baseResponse(400, "User already exists", {}));

        const user = new User({
            first_name: first_name,
            last_name: last_name,
            email:email,
            password: await hashPassword(password)
        });

        await user.save();
        return res.status(200).json(baseResponse(200, "User created", {user}));
    } catch (error) {
        return res.status(500).json(baseResponse(500, "Internal Server Error", {error}));
    }
}

module.exports = createUser;
