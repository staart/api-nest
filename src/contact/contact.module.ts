import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Contact } from "./contact.entity";
import { ContactsService } from "./contact.service";
import { ContactController } from "./contact.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  providers: [ContactsService],
  controllers: [ContactController],
  exports: [ContactsService]
})
export class ContactsModule {}
