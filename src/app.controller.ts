import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Body
} from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth/auth.service";
import { PwnedPasswordBody } from "./auth/auth.entity";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard("local"))
  @Post("auth/login")
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @Post("auth/password/breaches")
  async getNumberOfPasswordBreaches(@Body() passwordBody: PwnedPasswordBody) {
    return await this.authService.numberOfPasswordBreaches(
      passwordBody.password
    );
  }
}
