const baseResponse = require("../../helper/baseResponse/baseResponse");
const Order = require("./order.schema");

const createOrder = async (req, res) => {
  try {
    const { order_name, customer_id } = req.body;
    const order = new Order({
      order_name: order_name,
      customer: customer_id, // store the customer object Id while creating a order
    });
    await order.save();
    return res.status(200).json(baseResponse(200, "order created", order));
  } catch (error) {
    console.log(error);
  }
};

module.exports = createOrder;
