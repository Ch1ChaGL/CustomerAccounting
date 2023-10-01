import { NextFunction, Response, Request } from 'express';
import userServices from '../services/UserServices';
import { User } from '../model/User';
import ApiError from '../error/ApiError';
import UserServices from '../services/UserServices';
import bcrypt from 'bcrypt';
class UserController {
  // async create(req: Request<{}, {}, User>, res: Response, next: NextFunction) {
  //   try {
  //     const user = await userServices.create(req.body);
  //     res.status(200).json(user);
  //   } catch (error) {
  //     next(ApiError.badRequest(`Ошибка при создании ${error}`)); // Обработка ошибок
  //   }
  // }
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userServices.getAll();
      res.status(200).json(users);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при получении данных ${error}`)); // Обработка ошибок
    }
  }
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const users = await userServices.getById(id);
      res.status(200).json(users);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при получении данных ${error}`)); // Обработка ошибок
    }
  }
  async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await userServices.delete(id);
      res.status(200).json({ message: 'Успешно удален' });
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при удалении ${error}`)); // Обработка ошибок
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedUser = await UserServices.update(req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при обновлении ${error}`)); // Обработка ошибок
    }
  }

  async registration(
    req: Request<{}, {}, User>,
    res: Response,
    next: NextFunction,
  ) {
    const { Email, Password, FirstName, LastName, UserID } = req.body;
    const candidate = await UserServices.getByEmail(Email);
    if (candidate) {
      return next(
        ApiError.badRequest(`Пользователь с таким email уже существует`),
      );
    }
    const hashPassword = await bcrypt.hash(Password, 5);
    const u = req.body;
    u.Password = hashPassword;

    const user = await UserServices.create(u);
    res.status(200).json(user);
  }
}

export default new UserController();
