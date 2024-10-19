import { CustomError } from "./CustomError";
import { StatusCodes } from "http-status-codes";
export class DbError extends CustomError {
  public statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, DbError.prototype);
  }
}
