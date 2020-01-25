import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { GeolocationService } from "../providers/geolocation.service";
import { StringUtilsService } from "../providers/stringutils.service";
import { ShortIdService } from "../providers/shortid.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UsersService,
    GeolocationService,
    StringUtilsService,
    ShortIdService
  ],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
