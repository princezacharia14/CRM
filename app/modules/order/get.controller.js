const baseResponse = require("../../helper/baseResponse/baseResponse");
const Order = require("./order.schema");

const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id).populate('customer');
    return res.status(200).json(baseResponse(200, "order fetched", order));
  } catch (error) {
    console.log(error);
    return res.status(500).json(baseResponse(500, "failed to fetch order", error));
  }
};

module.exports = getOrder;
