import BaseRouter from './base/BaseRouter';
import UserRouter from './UserRouter';

class IndexRouter extends BaseRouter {
  public routes(): void {
    this.router.use('/user', UserRouter);
    // this.router.use('/customer');
    // this.router.use('/workType');
    // this.router.use('/statusType');
    // this.router.use('/order');
  }
}
export default new IndexRouter().router;
