import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { GeolocationService } from "../providers/geolocation.service";
import { StringUtilsService } from "../providers/stringutils.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, GeolocationService, StringUtilsService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
