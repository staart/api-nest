import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { User } from "./user/user.entity";
import { UsersModule } from "./user/users.module";
import { ContactsModule } from "./contact/contact.module";
import { AuthModule } from "./auth/auth.module";
import { Contact } from "./contact/contact.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST || "localhost",
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USERNAME || "root",
      password: process.env.DB_PASSWORD || "root",
      database: process.env.DB_DATABASE || "test",
      entities: [User, Contact],
      synchronize: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static")
    }),
    AuthModule,
    UsersModule,
    ContactsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
