class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

class OutOfStockError extends Error {
  constructor(productId, available) {
    super(`Товар ${productId}: на складе только ${available} шт.`);
    this.name = 'OutOfStockError';
    this.productId = productId;
    this.available = available;
  }
}