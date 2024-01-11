const SalesRepository = require("../../repositories/Sale/SalesRepository");
const SalesServices = require("../../services/Sale/SaleServices");

module.exports = class SalesController {
  async create(req, res) {
    const { products, total, method } = req.body;
    const { id } = req.user;

    const salesRepo = new SalesRepository();
    const salesServices = new SalesServices(salesRepo);

    await salesServices.executeCreate({
      userId: id,
      products,
      total,
      method,
    });

    return res.status(201).json();
  }

  async show(req, res) {
    const { id } = req.params;

    const salesRepo = new SalesRepository();
    const salesServices = new SalesServices(salesRepo);

    const order = await salesServices.executeShow(id);

    return res.json(order);
  }

  async update(req, res) {
    const { id } = req.user;
    const { products, total, method } = req.body;
    const { order_id } = req.params;

    const salesRepo = new SalesRepository();
    const salesServices = new SalesServices(salesRepo);

    await salesServices.executeUpdate({
      userId: id,
      orderId: order_id,
      products,
      total,
      method,
    });

    return res.json();
  }

  async getOpenOrders(req, res) {
    const salesRepo = new SalesRepository();
    const salesServices = new SalesServices(salesRepo);

    const openOrders = await salesServices.executeGetOpenOrders();

    return res.json(openOrders);
  }

  async finalizeOrder(req, res) {}
};
