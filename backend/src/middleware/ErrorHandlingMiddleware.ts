import { Request, Response } from 'express';
import ApiError from '../error/ApiError';

export function ErrorHandlingMiddleware(
  err: Error,
  req: Request,
  res: Response,
) {
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ status: err.status, message: err.message });
  }
  return res
    .status(500)
    .json({ status: 500, message: 'Непредвиденная ошибка' });
}
