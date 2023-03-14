const baseResponse = require("../../helper/baseResponse/baseResponse");
const Customer = require("./customer.schema");
const { getACustomerValidator } = require('./customer.validator');

const getACustomer = async (req, res) => {
  try {
    let validated = getACustomerValidator.validate(req.params);
    if (validated.error) return res.status(400).json(baseResponse(400, validated.error.details[0].message, {}));

    const { id } = req.params;
    const customer = await Customer.findById(id)
    return res.status(200).json(baseResponse(200, "customer fetched", customer));
  } catch (error) {
    console.log(error);
  }
};

module.exports = getACustomer;
