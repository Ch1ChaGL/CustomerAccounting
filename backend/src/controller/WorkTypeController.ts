import { NextFunction, Response, Request } from 'express';
import WorkTypeServices from '../services/WorkTypeServices';
import { WorkType } from '../model/WorkType';
import ApiError from '../error/ApiError';

class WorkTypeController {
  async create(
    req: Request<{}, {}, WorkType>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const wk = await WorkTypeServices.create(req.body);
      return res.json(wk);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при создании ${error}`)); // Обработка ошибок
    }
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const worktype = await WorkTypeServices.getAll();
      res.status(200).json(worktype);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при получении данных ${error}`)); // Обработка ошибок
    }
  }
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const worktype = await WorkTypeServices.getById(id);
      res.status(200).json(worktype);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при получении данных ${error}`)); // Обработка ошибок
    }
  }
  async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await WorkTypeServices.delete(id);
      res.status(200).json({ message: 'Успешно удален' });
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при удалении ${error}`)); // Обработка ошибок
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedWorkType = await WorkTypeServices.update(req.body);
      res.status(200).json(updatedWorkType);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при обновлении ${error}`)); // Обработка ошибок
    }
  }
}

export default new WorkTypeController();
