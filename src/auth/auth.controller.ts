import {
  Controller,
  UseGuards,
  Post,
  Request,
  Body,
  HttpCode,
  HttpStatus,
  Ip
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import {
  LoginBody,
  RegisterBody,
  PwnedPasswordBody,
  UsernameAvailableBody
} from "./auth.entity";
import { UserRequest } from "./auth.interfaces";
import { UsersService } from "../user/users.service";
import { User } from "../user/user.entity";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService
  ) {}

  @UseGuards(AuthGuard("local"))
  @Post("login")
  @HttpCode(HttpStatus.OK)
  async login(@Request() req: UserRequest, @Body() loginBody: LoginBody) {
    return this.authService.login(req.user);
  }

  @Post("register")
  async register(
    @Request() req: UserRequest,
    @Ip() ipAddress: string,
    @Body() registerBody: RegisterBody
  ) {
    return this.authService.register(registerBody, ipAddress);
  }

  @Post("username-available")
  @HttpCode(HttpStatus.OK)
  async checkIfUsernameAvailable(@Body() passwordBody: UsernameAvailableBody) {
    return {
      available: await this.userService.checkIfUsernameAvailable(
        passwordBody.username
      )
    };
  }

  @Post("password/breaches")
  @HttpCode(HttpStatus.OK)
  async getNumberOfPasswordBreaches(@Body() passwordBody: PwnedPasswordBody) {
    return {
      breaches: await this.authService.numberOfPasswordBreaches(
        passwordBody.password
      )
    };
  }
}
