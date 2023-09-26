import { NextFunction, Response, Request } from 'express';
import userServices from '../services/UserServices';
import { User } from '../model/User';

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
}

export default new UserController();
