const SalesRepository = require("../../repositories/Sale/SalesRepository");
const SalesServices = require("../../services/Sale/SaleServices");

module.exports = class SalesAdminController {
  async index(req, res) {
    const salesRepo = new SalesRepository();
    const salesServices = new SalesServices(salesRepo);

    const orders = await salesServices.executeIndex();

    return res.json(orders);
  }

  async getClosedOrders(req, res) {
    const salesRepo = new SalesRepository();
    const salesServices = new SalesServices(salesRepo);

    const closedOrders = await salesServices.executeGetClosedOrders();

    return res.json(closedOrders);
  }
};
