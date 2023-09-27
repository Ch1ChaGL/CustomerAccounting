import { Customer } from './../model/Customer';

interface ICustomerServices {
  create(customer: Customer): Promise<void>;
  update(customer: Customer): Promise<void>;
  delete(customerId: string): Promise<void>;
  getById(customerId: string): Promise<Customer | null>;
  getAll(): Promise<Customer[] | null>;
}

/**
 * TODO Сделать выдачу картинок и все остальное
 */
class UserServices implements ICustomerServices {
  async create(customer: Customer): Promise<void> {
    try {
      await Customer.create({ ...customer });
    } catch (error) {
      throw new Error('Failed to create customer');
    }
  }
  async update(customer: Customer): Promise<void> {
    // const UserID = customer.CustomerID;
    // await User.update({ ...user }, { where: { UserID } });
  }
  async delete(customerId: string): Promise<void> {
    await Customer.destroy({ where: { CustomerID: customerId } });
  }
  async getById(customerId: string): Promise<Customer | null> {
    const customer = await Customer.findByPk(customerId);
    return customer;
  }
  async getAll(): Promise<Customer[] | null> {
    const customers = await Customer.findAll();
    return customers;
  }
}

export default new UserServices();
