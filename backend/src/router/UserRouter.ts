import UserController from '../controller/UserController';
import UserServices from '../services/UserServices';
import BaseRouter from './base/BaseRouter';

class UserRoutes extends BaseRouter {
  public routes(): void {
    this.router.post('', UserController.registration);
    this.router.put('', UserController.update);
    this.router.delete('/:id', UserController.deleteById);
    this.router.get('', UserController.getAll);
    this.router.get('/:id', UserController.getById);
  }
}

export default new UserRoutes().router;
