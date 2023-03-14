const Joi = require('joi'); 

const createCustomerValidator = Joi.object({
    name: Joi.string().required(),
    phone_number: Joi.string().required(),
    email:  Joi.string().required()
});

const getACustomerValidator = Joi.object({
    id: Joi.string().required()
})

module.exports = {
    createCustomerValidator,
    getACustomerValidator
};