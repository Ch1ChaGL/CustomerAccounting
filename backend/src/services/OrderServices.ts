import { Order } from '../model/Order';

interface IOrderServices {
  create(order: Order): Promise<Order>;
  update(order: Order): Promise<number[]>;
  delete(OrderID: string): Promise<number>;
  getByOrderID(OrderID: string): Promise<Order | null>;
  getByCustomerID(CustomerID: string): Promise<Order[] | null>;
  getByUserID(UserID: string): Promise<Order[] | null>;
  getAll(): Promise<Order[] | null>;
}

class StatusTypeServices implements IOrderServices {
  async getByCustomerID(CustomerID: string): Promise<Order[] | null> {
    const orders = await Order.findAll({ where: { CustomerID } });
    return orders;
  }
  async getByUserID(UserID: string): Promise<Order[] | null> {
    const orders = await Order.findAll({ where: { UserID } });
    return orders;
  }
  async create(order: Order): Promise<Order> {
    try {
      return await Order.create({ ...order });
    } catch (error) {
      throw new Error('Failed to create order');
    }
  }
  async update(order: Order): Promise<number[]> {
    const OrderID = order.OrderID;
    return await Order.update({ ...order }, { where: { OrderID } });
  }
  async delete(OrderID: string): Promise<number> {
    return await Order.destroy({ where: { OrderID } });
  }
  async getByOrderID(OrderID: string): Promise<Order | null> {
    const statusType = await Order.findByPk(OrderID);
    return statusType;
  }
  async getAll(): Promise<Order[] | null> {
    const statusTypes = await Order.findAll();
    return statusTypes;
  }
}

export default new StatusTypeServices();
