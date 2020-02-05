import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Contact } from "./contact.entity";
import { Repository } from "typeorm";

@Injectable()
export class ContactsService extends TypeOrmCrudService<Contact> {
  constructor(@InjectRepository(Contact) repo: Repository<Contact>) {
    super(repo);
  }
}
