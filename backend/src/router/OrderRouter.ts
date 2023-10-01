import OrderController from '../controller/OrderController';
import OrderServices from '../services/OrderServices';
import BaseRouter from './base/BaseRouter';

class OrderRouter extends BaseRouter {
  routes(): void {
    this.router.post('', OrderController.create);
    this.router.put('', OrderController.update);
    this.router.delete('/:id', OrderController.deleteById);
    this.router.get('', OrderController.getAll);
    this.router.get('/order/:id', OrderController.getByOrderId);
    this.router.get('/customer/:id', OrderController.getByCustomerId);
    this.router.get('/user/:id', OrderController.getByUserId);
  }
}

export default new OrderRouter().router;