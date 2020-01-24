import { Injectable } from "@nestjs/common";
import { UsersService } from "../user/users.service";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, requestPassword: string) {
    const user = await this.usersService.findOne(username);
    console.log("I found user", user);
    if (user && user.password === requestPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
