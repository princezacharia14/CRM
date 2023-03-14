const baseResponse = require("../../helper/baseResponse/baseResponse");
const Customer = require("./customer.schema");
const { createCustomerValidator } = require('./customer.validator')

const createCustomer = async (req, res) => {
  try {
    let validated = createCustomerValidator.validate(req.body);
    if (validated.error) return res.status(400).json(baseResponse(400, validated.error.details[0].message, {}));

    const { name, phone_number, email } = req.body;
    const customer = new Customer({
      name: name,
      phone_number: phone_number,
      email: email,
    });
    await customer.save();
    return res.status(200).json(baseResponse(200, "customer created", customer));
  } catch (error) {
    console.log(error);
  }
};

module.exports = createCustomer;
