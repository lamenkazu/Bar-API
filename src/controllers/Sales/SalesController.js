const SalesRepository = require("../../repositories/Sale/SalesRepository");
const SalesServices = require("../../services/Sale/SaleServices");

module.exports = class SalesController {
  async create(req, res) {
    const { products, total, method, status } = req.body;
    const { id } = req.user;

    const salesRepo = new SalesRepository();
    const salesServices = new SalesServices(salesRepo);

    await salesServices.executeCreate({
      userId: id,
      products,
      total,
      method,
      status,
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

  async update(req, res) {}

  async getOpenOrders(req, res) {}

  async finalizeOrder(req, res) {}
};
