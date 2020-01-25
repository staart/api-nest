import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { UsersModule } from "../user/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { PwnedService } from "src/providers/pwned.service";

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.accessTokenExpiry }
    })
  ],
  providers: [AuthService, LocalStrategy, PwnedService],
  exports: [AuthService]
})
export class AuthModule {}
