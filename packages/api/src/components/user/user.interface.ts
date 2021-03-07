import { Document, ObjectId } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { IPayload } from '../auth/auth.interfaces';

export interface IProduct {
  _id?: ObjectId;
  frontID?: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface IUser extends Document {
  username?: string;
  email: string;
  password: string;
  cart?: IProduct[];
  productsBought?: IProduct[];
}

export interface IController {
  (req: Request, res: Response, next: NextFunction): Promise<Response>;
}

export interface IDataForToken extends IPayload {
  err?: { msg: string; statusCode: number };
}
