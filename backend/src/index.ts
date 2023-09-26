import express, { Application, Request, Response } from 'express';
import Database from './config/database';
import UserRouter from './router/UserRouter';
import cors from 'cors';
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.databaseSync();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  protected databaseSync(): void {
    const db = new Database();
    db.sequelize?.sync();
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send('welocome home');
    });
    this.app.use('/api/user', UserRouter);
  }
}

const port: number = 5000;
const app = new App().app;

app.listen(port, () => {
  console.log(`server start on ${port} port`);
});
