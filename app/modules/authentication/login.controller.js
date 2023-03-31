const baseResponse = require('../../helper/baseResponse/baseResponse');
const User = require('./authenication.schema');
const { validatePassword } = require('../../helper/bcrypt/bcrypt');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(401).json(baseResponse(401, "Invalid email or password", {}));
        }
        
        const isPasswordValid = await validatePassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json(baseResponse(401, "Invalid email or password", {}));
        }
        
        const userObject = {
            id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
        };
        
        return res.status(200).json(baseResponse(200, "Login successful", { user: userObject }));
    } catch (error) {
        return res.status(500).json(baseResponse(500, "Internal server error", { error }));
    }
};

module.exports = loginUser;
