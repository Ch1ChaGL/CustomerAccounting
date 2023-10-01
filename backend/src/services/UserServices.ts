import { User } from '../model/User';

interface IUserServices {
  create(user: User): Promise<User>;
  update(user: User): Promise<number[]>;
  delete(userId: string): Promise<number>;
  getById(userId: string): Promise<User | null>;
  getAll(): Promise<User[] | null>;
}

class UserServices implements IUserServices {
  async create(user: User): Promise<User> {
    try {
      return await User.create({ ...user });
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }
  async update(user: User): Promise<number[]> {
    const UserID = user.UserID;
    return await User.update({ ...user }, { where: { UserID } });
  }
  async delete(userId: string): Promise<number> {
    return await User.destroy({ where: { UserID: userId } });
  }
  async getById(userId: string): Promise<User | null> {
    const user = await User.findByPk(userId);
    return user;
  }
  async getAll(): Promise<User[] | null> {
    const users = await User.findAll();
    return users;
  }
  async getByEmail(Email: string): Promise<User> {
    const user = await User.findOne({ where: { Email } });
    return user as User;
  }
}

export default new UserServices();
