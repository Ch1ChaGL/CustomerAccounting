import UserController from '../controller/UserController';
import BaseRouter from './base/BaseRouter';

class UserRoutes extends BaseRouter {
  public routes(): void {
    this.router.post('', UserController.create);
  }
}

export default new UserRoutes().router;
