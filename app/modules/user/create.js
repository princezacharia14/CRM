const createUser = async(req, res) => {
    try {
        res.send("Hello User")
    } catch (error) {
        console.log(error);
        
    }

}
module.exports = createUser;