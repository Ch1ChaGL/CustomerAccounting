import { NextFunction, Response, Request } from 'express';
import CustomerServices from '../services/CustomerServices';
import { Customer } from '../model/Customer';
import ApiError from '../error/ApiError';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';
class CustomerController {
  async create(
    req: Request<{}, {}, Omit<Customer, 'Photo'>>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { CustomerID, Email, FirstName, LastName } = req.body;
      const { Photo } = req.files as any; // Photo будет содержать информацию о загруженном файле
      if (!Photo) {
        return next(ApiError.badRequest('Файл "Photo" не найден.'));
      }

      const fileName = uuidv4() + '.jpg';
      Photo.mv(path.resolve(__dirname, '..', '..', 'static', fileName));

      const customer = await CustomerServices.create({
        ...req.body,
        CustomerID,
        Email,
        FirstName,
        LastName,
        Photo: fileName,
      });
      res.status(200).json(customer);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при создании ${error}`)); // Обработка ошибок
    }
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const customer = await CustomerServices.getAll();
      console.log(customer);
      res.status(200).json(customer);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при получении данных ${error}`)); // Обработка ошибок
    }
  }
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const customer = await CustomerServices.getById(id);
      res.status(200).json(customer);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при получении данных ${error}`)); // Обработка ошибок
    }
  }
  async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const getedCustomer = await CustomerServices.getById(id);
      let filename = getedCustomer?.Photo || '';
      const filePath = path.resolve(__dirname, '..', 'static', filename);

      // Проверьте, существует ли файл
      if (fs.existsSync(filePath)) {
        // Удалите файл
        fs.unlinkSync(filePath);
      }
      await CustomerServices.delete(id);
      res.status(200).json({ message: 'Успешно удален' });
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при удалении ${error}`)); // Обработка ошибок
    }
  }
  async update(
    req: Request<{}, {}, Omit<Customer, 'Photo'>>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { CustomerID, Email, FirstName, LastName } = req.body;

      const getedCustomer = await CustomerServices.getById(req.body.CustomerID);
      let filename = getedCustomer?.Photo || '';
      const filePath = path.resolve(__dirname, '..', 'static', filename);

      // Проверьте, существует ли файл
      if (fs.existsSync(filePath)) {
        // Удалите файл
        fs.unlinkSync(filePath);
      }

      const { Photo } = req.files as any; // Photo будет содержать информацию о загруженном файле
      if (!Photo) {
        return next(ApiError.badRequest('Файл "Photo" не найден.'));
      }

      filename = uuidv4() + '.jpg';
      Photo.mv(path.resolve(__dirname, '..', 'static', filename));

      const updatedCustomer = await CustomerServices.update({
        ...req.body,
        CustomerID,
        Email,
        FirstName,
        LastName,
        Photo: filename,
      });

      res.status(200).json(updatedCustomer);
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при обновлении ${error}`)); // Обработка ошибок
    }
  }
}

export default new CustomerController();
