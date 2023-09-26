import { User } from '../model/User';

interface IUserServices {
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(userId: number): Promise<void>;
  getById(userId: number): Promise<User>;
  getAll(): Promise<User[]>;
}

class UserServices implements IUserServices {
  async create(user: User): Promise<void> {
    try {
      await User.create({ ...user });
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }
  update(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(userId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getById(userId: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}

export default new UserServices();
