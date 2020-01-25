import { Request } from "express";
import { User } from "src/user/user.entity";

export interface UserRequest extends Request {
  user: User;
}
