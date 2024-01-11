const AppError = require("../../utils/AppError");

module.exports = class SaleServices {
  constructor(saleRepo) {
    this.saleRepo = saleRepo;
  }

  async executeCreate({ userId, products, total, method }) {
    const it = this.saleRepo;

    //O método de pagamento, se enviado, deve ser valido;
    const validPaymentMethods = ["credit_card", "debit_card", "cash", "pix"];
    if (method && !validPaymentMethods.includes(method)) {
      throw new AppError("Método de pagamento inválido", 402);
    }

    const createdOrder = await it.create({
      userId,
      products,
      total,
      method,
    });

    if (!createdOrder)
      throw new AppError("Não foi possível criar esta ordem", 400);

    return createdOrder;
  }

  async executeShow(id) {
    const it = this.saleRepo;

    const order = await it.show(id);

    if (!order) throw new AppError("Ordem de venda não encontrada", 404);

    return order;
  }

  async executeUpdate({ userId, orderId, products, total, method }) {
    const it = this.saleRepo;

    const updatedOrder = await it.update({
      userId,
      orderId,
      products,
      total,
      method,
    });

    if (!updatedOrder)
      throw new AppError(
        "Pedido de venda não encontrado para atualização.",
        404
      );

    return updatedOrder;
  }

  async executeGetOpenOrders() {
    const it = this.saleRepo;

    const openOrders = await it.getOpenOrders();

    if (!openOrders)
      throw new AppError("Não foram encontradas pedidos de venda abertos", 404);

    return openOrders;
  }

  async executeFinalizeOrder({ userId, orderId, method }) {
    const it = this.saleRepo;

    if (!method)
      throw new AppError(
        "O método de pagamento deve ser especificado para a finalização do pedido",
        400
      );

    const order = await it.finalizeOrder({ userId, orderId, method });

    if (!order)
      throw new AppError("Pedido de venda não encontrado para finalizar", 404);

    return order;
  }
};
