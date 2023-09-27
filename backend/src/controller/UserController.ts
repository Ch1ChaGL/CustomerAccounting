import { NextFunction, Response, Request } from 'express';
import userServices from '../services/UserServices';
import { User } from '../model/User';
import ApiError from '../error/ApiError';

class UserController {
  async create(req: Request<{}, {}, User>, res: Response, next: NextFunction) {
    try {
      await userServices.create(req.body);
      res.status(200).json({
        status: 'Created!',
        message: 'Successfully created user',
      });
    } catch (e) {}
  }
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
}

export default new UserController();
