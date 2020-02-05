import { Injectable } from "@nestjs/common";
import { UsersService } from "../user/users.service";
import { JwtService } from "@nestjs/jwt";
import { PwnedService } from "../providers/pwned.service";
import { User } from "../user/user.entity";
import { jwtConstants } from "./constants";
import { RegisterBody } from "./auth.entity";

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
    return {
      access_token: this.jwtService.sign({
        type: "access",
        username: user.username,
        sub: user.id
      }),
      refresh_token: this.jwtService.sign(
        {
          type: "refresh",
          sub: user.id
        },
        {
          expiresIn: jwtConstants.refreshTokenExpiry
        }
      )
    };
  }

  async register(registerBody: RegisterBody, ipAddress: string) {
    const registerUser = new User();
    const primaryEmailId = 32;
    registerUser.name = registerBody.name;
    registerUser.primaryEmailId = primaryEmailId;
    const user = this.usersService.safeNewUserValue(registerUser, ipAddress);
    return user;
  }

  async numberOfPasswordBreaches(password: string) {
    return await this.pwnedService.getNumberOfBreaches(password);
  }
}
