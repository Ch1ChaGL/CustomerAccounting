import BaseRouter from './base/BaseRouter';
import CustomerRouter from './CustomerRouter';
import OrderRouter from './OrderRouter';
import StatusTypeRouter from './StatusTypeRouter';
import UserRouter from './UserRouter';
import WorkTypeRouter from './WorkTypeRouter';

class IndexRouter extends BaseRouter {
  public routes(): void {
    this.router.use('/user', UserRouter);
    this.router.use('/customer', CustomerRouter);
    this.router.use('/workType', WorkTypeRouter);
    this.router.use('/statusType', StatusTypeRouter);
    this.router.use('/order', OrderRouter);
  }
}
export default new IndexRouter().router;
