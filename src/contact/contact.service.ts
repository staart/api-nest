import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Contact } from "./contact.entity";
import { Repository } from "typeorm";
import { ContactTypes } from "./contact.interfaces";
import { User } from "../user/user.entity";

@Injectable()
export class ContactsService extends TypeOrmCrudService<Contact> {
  constructor(@InjectRepository(Contact) repo: Repository<Contact>) {
    super(repo);
  }

  public async createEmailForUser(user: User, email: string) {
    return await this.repo.save({
      user,
      type: ContactTypes.EMAIL,
      value: email,
      verified: false
    });
  }

  private async checkIfContactExists(type: ContactTypes, value: string) {
    try {
      return !!(await this.findOne({ type, value, verified: true }));
    } catch {
      return false;
    }
  }

  async checkIfContactAvailable(type: ContactTypes, value: string) {
    return !(await this.checkIfContactExists(type, value));
  }
}
