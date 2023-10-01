import express, { Application, Request, Response } from 'express';
import Database from './config/database';
import IndexRouter from './router/index';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { ErrorHandlingMiddleware } from './middleware/ErrorHandlingMiddleware';
import path from 'path';
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.databaseSync();
    this.plugins();
    this.routes();
    this.errorHandler();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(express.static(path.resolve(__dirname, '..', 'static')));
    this.app.use(fileUpload({}));
    this.app.use(cors());
  }

  protected errorHandler(): void {
    this.app.use(ErrorHandlingMiddleware);
  }

  protected databaseSync(): void {
    const db = new Database();
    db.sequelize?.sync({ alter: true });
  }

  protected routes(): void {
    this.app.use('/api', IndexRouter);
  }
}

const port: number = Number(process.env.PORT) || 5000;
const app = new App().app;

app.listen(port, () => {
  console.log(`server start on ${port} port`);
});
