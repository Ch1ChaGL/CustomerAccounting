import { NextFunction, Response, Request } from 'express';
import userServices from '../services/UserServices';
import { User } from '../model/User';
import ApiError from '../error/ApiError';
import UserServices from '../services/UserServices';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const generateJWT = (id: number, email: string) => {
  return jwt.sign({ UserID: id, Email: email }, String(process.env.KEY), {
    expiresIn: '24h',
  });
};

class UserController {
  // async create(req: Request<{}, {}, User>, res: Response, next: NextFunction) {
  //   try {
  //     const user = await userServices.create(req.body);
  //     res.status(200).json(user);
  //   } catch (error) {
  //     next(ApiError.badRequest(`Ошибка при создании ${error}`)); // Обработка ошибок
  //   }
  // }
  // async getAll(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const users = await userServices.getAll();
  //     res.status(200).json(users);
  //   } catch (error) {
  //     next(ApiError.badRequest(`Ошибка при получении данных ${error}`)); // Обработка ошибок
  //   }
  // }
  // async getById(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id } = req.params;
  //     const users = await userServices.getById(id);
  //     res.status(200).json(users);
  //   } catch (error) {
  //     next(ApiError.badRequest(`Ошибка при получении данных ${error}`)); // Обработка ошибок
  //   }
  // }
  // async deleteById(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id } = req.params;
  //     await userServices.delete(id);
  //     res.status(200).json({ message: 'Успешно удален' });
  //   } catch (error) {
  //     next(ApiError.badRequest(`Ошибка при удалении ${error}`)); // Обработка ошибок
  //   }
  // }
  // async update(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const updatedUser = await UserServices.update(req.body);
  //     res.status(200).json(updatedUser);
  //   } catch (error) {
  //     next(ApiError.badRequest(`Ошибка при обновлении ${error}`)); // Обработка ошибок
  //   }
  // }

  async registration(
    req: Request<{}, {}, User>,
    res: Response,
    next: NextFunction,
  ) {
    const { Email, Password, UserID } = req.body;
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

    const token = generateJWT(user.UserID, user.Email);
    return res.json({ token });
  }

  async login(req: Request, res: Response, next: NextFunction) {
    console.log('я тут');
    const { Email, Password } = req.body;
    const user = await UserServices.getByEmail(Email);
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    let comparePassword = bcrypt.compareSync(Password, user.Password);
    if (!comparePassword) {
      return next(ApiError.internal('Неверный пароль'));
    }

    const token = generateJWT(user.UserID, user.Email);
    console.log('----------------------------');
    console.log(token);
    return res.json({ token });
  }

  async auth(req: Request<{}, {}, User>, res: Response, next: NextFunction) {
    const token = generateJWT(req.body.UserID, req.body.Email);
    return res.json({ token });
  }
}

export default new UserController();
