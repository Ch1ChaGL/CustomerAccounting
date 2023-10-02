import UserController from '../controller/UserController';
import authMiddleware from '../middleware/authMiddleware';
import UserServices from '../services/UserServices';
import BaseRouter from './base/BaseRouter';

class UserRoutes extends BaseRouter {
  public routes(): void {
    this.router.post('/registatration', UserController.registration);
    this.router.post('/login', UserController.login);
    this.router.get('/auth', authMiddleware, UserController.auth);
    // this.router.put('', UserController.update);
    // this.router.delete('/:id', UserController.deleteById);
    // this.router.get('', UserController.getAll);
    // this.router.get('/:id', UserController.getById);
  }
}

export default new UserRoutes().router;
