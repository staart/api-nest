import { Request } from "express";
import { User } from "../user/user.entity";

export interface UserRequest extends Request {
  user: User;
}
