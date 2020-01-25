import { Controller, UseGuards, Post, Request, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { LoginBody, PwnedPasswordBody } from "./auth.entity";
import { UserRequest } from "./auth.interfaces";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(public authService: AuthService) {}

  @UseGuards(AuthGuard("local"))
  @Post("login")
  async login(@Request() req: UserRequest, @Body() loginBody: LoginBody) {
    return this.authService.login(req.user);
  }

  @Post("password/breaches")
  async getNumberOfPasswordBreaches(@Body() passwordBody: PwnedPasswordBody) {
    return await this.authService.numberOfPasswordBreaches(
      passwordBody.password
    );
  }
}
