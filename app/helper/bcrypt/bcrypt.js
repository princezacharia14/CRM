const bcrypt = require('bcrypt');


const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}
const validatePassword = async(recivedPassword, orginalPassword) => {
    try {
        return await bcrypt.compare(recivedPassword, orginalPassword)
    } catch (error) {
        throw error;
    }
}
module.exports = {
    hashPassword,
    validatePassword
}

