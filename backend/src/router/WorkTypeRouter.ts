import BaseRouter from './base/BaseRouter';

class WorkTypeRouter extends BaseRouter {
  routes(): void {
    this.router.post('');
    this.router.put('');
    this.router.delete('');
    this.router.get('');
  }
}

export default new WorkTypeRouter().router;