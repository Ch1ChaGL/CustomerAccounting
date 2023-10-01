import { NextFunction, Response, Request } from 'express';
import { StatusType } from '../model/StatusType';
import ApiError from '../error/ApiError';
import StatusTypeServices from '../services/StatusTypeServices';

class StatusTypeController {
  async create(
    req: Request<{}, {}, StatusType>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const statusType = await StatusTypeServices.create(req.body);
      res.status(200).json(statusType);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при создании ${error}`)); // Обработка ошибок
    }
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const statusType = await StatusTypeServices.getAll();
      res.status(200).json(statusType);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при получении данных ${error}`)); // Обработка ошибок
    }
  }
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const statusType = await StatusTypeServices.getById(id);
      res.status(200).json(statusType);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при получении данных ${error}`)); // Обработка ошибок
    }
  }
  async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await StatusTypeServices.delete(id);
      res.status(200).json({ message: 'Успешно удален' });
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при удалении ${error}`)); // Обработка ошибок
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedStatusType = await StatusTypeServices.update(req.body);
      res.status(200).json(updatedStatusType);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при обновлении ${error}`)); // Обработка ошибок
    }
  }
}

export default new StatusTypeController();
