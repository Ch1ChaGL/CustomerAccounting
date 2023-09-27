import { User } from '../model/User';

interface IUserServices {
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(userId: string): Promise<void>;
  getById(userId: string): Promise<User | null>;
  getAll(): Promise<User[] | null>;
}

class UserServices implements IUserServices {
  async create(user: User): Promise<void> {
    try {
      await User.create({ ...user });
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }
  async update(user: User): Promise<void> {
    const UserID = user.UserID;
    await User.update({ ...user }, { where: { UserID } });
  }
  async delete(userId: string): Promise<void> {
    await User.destroy({ where: { UserID: userId } });
  }
  async getById(userId: string): Promise<User | null> {
    const user = await User.findByPk(userId);
    return user;
  }
  async getAll(): Promise<User[] | null> {
    const users = await User.findAll();
    return users;
  }
}

export default new UserServices();
