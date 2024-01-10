const AppError = require("../../utils/AppError");

module.exports = class SaleServices {
  constructor(saleRepo) {
    this.saleRepo = saleRepo;
  }

  async executeCreate({ userId, products, total, method, status }) {
    const it = this.saleRepo;

    //A ordem não pode ser fechada sem método de pagamento
    if (!method && status === "closed")
      throw new AppError(
        "Não é possível fechar uma ordem sem um método de pagamento especificado",
        402
      );

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
      status,
    });

    if (!createdOrder)
      throw new AppError("Não foi possível criar esta ordem", 400);

    return createdOrder;
  }

  async executeShow() {
    const it = this.saleRepo;
  }

  async executeUpdate() {
    const it = this.saleRepo;
  }

  async executeFinalizeOrder() {
    const it = this.saleRepo;
  }
};
