import UserController from '../controller/UserController';
import BaseRouter from './base/BaseRouter';

class UserRoutes extends BaseRouter {
  public routes(): void {
    this.router.post('', UserController.create);
    this.router.put('');
    this.router.delete('');
    this.router.get('', UserController.getAll);
    this.router.get('/:id', UserController.getById);
  }
}

export default new UserRoutes().router;
