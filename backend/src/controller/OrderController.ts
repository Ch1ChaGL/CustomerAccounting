import { NextFunction, Response, Request } from 'express';
import ApiError from '../error/ApiError';
import { Order } from '../model/Order';
import OrderServices from '../services/OrderServices';

class OrderController {
  async create(req: Request<{}, {}, Order>, res: Response, next: NextFunction) {
    try {
      const order = await OrderServices.create(req.body);
      res.status(200).json(order);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при создании ${error}`)); // Обработка ошибок
    }
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await OrderServices.getAll();
      res.status(200).json(orders);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при получении данных ${error}`)); // Обработка ошибок
    }
  }
  async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await OrderServices.delete(id);
      res.status(200).json({ message: 'Успешно удален' });
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при удалении ${error}`)); // Обработка ошибок
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedOrder = await OrderServices.update(req.body);
      res.status(200).json(updatedOrder);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при обновлении ${error}`)); // Обработка ошибок
    }
  }
  async getByCustomerId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const orders = await OrderServices.getByCustomerID(id);
      res.status(200).json(orders);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при получении ${error}`)); // Обработка ошибок
    }
  }
  async getByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const orders = await OrderServices.getByUserID(id);
      res.status(200).json(orders);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при получении ${error}`)); // Обработка ошибок
    }
  }
  async getByOrderId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const orders = await OrderServices.getByUserID(id);
      res.status(200).json(orders);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при получении ${error}`)); // Обработка ошибок
    }
  }
}

export default new OrderController();
