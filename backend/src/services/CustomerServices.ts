import { Customer } from './../model/Customer';

interface ICustomerServices {
  create(customer: Customer): Promise<Customer>;
  update(customer: Customer): Promise<number[]>;
  delete(customerId: string): Promise<number>;
  getById(customerId: string): Promise<Customer | null>;
  getAll(): Promise<Customer[] | null>;
}

class UserServices implements ICustomerServices {
  async create(customer: Customer): Promise<Customer> {
    try {
      return await Customer.create({ ...customer });
    } catch (error) {
      throw new Error('Failed to create customer');
    }
  }
  async update(customer: Customer): Promise<number[]> {
    const CustomerID = customer.CustomerID;
    return await Customer.update({ ...customer }, { where: { CustomerID } });
  }
  async delete(customerId: string): Promise<number> {
    return await Customer.destroy({ where: { CustomerID: customerId } });
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
