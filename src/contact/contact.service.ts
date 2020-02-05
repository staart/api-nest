import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Contact } from "./contact.entity";
import { Repository } from "typeorm";
import { ContactTypes } from "./contact.interfaces";

@Injectable()
export class ContactsService extends TypeOrmCrudService<Contact> {
  constructor(@InjectRepository(Contact) repo: Repository<Contact>) {
    super(repo);
  }

  public async createEmailForUser(userId: number, email: string) {
    return await this.repo.save({
      userId,
      type: ContactTypes.EMAIL,
      value: email,
      verified: false
    });
  }
}
