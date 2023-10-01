import WorkTypeController from '../controller/WorkTypeController';
import WorkTypeServices from '../services/WorkTypeServices';
import BaseRouter from './base/BaseRouter';

class WorkTypeRouter extends BaseRouter {
  routes(): void {
    this.router.post('', WorkTypeController.create);
    this.router.put('', WorkTypeController.update);
    this.router.delete('/:id', WorkTypeController.deleteById);
    this.router.get('', WorkTypeController.getAll);
    this.router.get('/:id', WorkTypeController.getById);
  }
}

export default new WorkTypeRouter().router;