import CustomerController from '../controller/CustomerController';
import CustomerServices from '../services/CustomerServices';
import BaseRouter from './base/BaseRouter';
import multer from 'multer';
const upload = multer();

class CustomerRouter extends BaseRouter {
  routes(): void {
    this.router.post('', CustomerController.create);
    this.router.put('', CustomerController.update);
    this.router.delete('/:id', CustomerController.deleteById);
    this.router.get('', CustomerController.getAll);
    this.router.get('/:id', CustomerController.getById);
  }
}

export default new CustomerRouter().router;
