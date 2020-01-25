import { Injectable } from "@nestjs/common";
import { UsersService } from "../user/users.service";
import { JwtService } from "@nestjs/jwt";
import { PwnedService } from "../providers/pwned.service";
import { User } from "../user/user.entity";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly pwnedService: PwnedService
  ) {}

  async validateUser(username: string, requestPassword: string) {
    const user = await this.usersService.findOne({ username });
    if (user && user.password === requestPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  async numberOfPasswordBreaches(password: string) {
    return await this.pwnedService.getNumberOfBreaches(password);
  }
}
