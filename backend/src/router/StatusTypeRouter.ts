import StatusTypeController from '../controller/StatusTypeController';
import StatusTypeServices from '../services/StatusTypeServices';
import BaseRouter from './base/BaseRouter';

class StatusTypeRouter extends BaseRouter {
  routes(): void {
    this.router.post('', StatusTypeController.create);
    this.router.put('', StatusTypeController.update);
    this.router.delete('/:id', StatusTypeController.deleteById);
    this.router.get('/:id', StatusTypeController.getById);
    this.router.get('', StatusTypeController.getAll);
  }
}

export default new StatusTypeRouter().router;
