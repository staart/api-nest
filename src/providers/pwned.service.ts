import { Injectable } from "@nestjs/common";
import { pwnedPassword } from "hibp";

@Injectable()
export class PwnedService {
  async getNumberOfBreaches(password: string) {
    return await pwnedPassword(password);
  }

  async checkIsPasswordIsPwned(password: string) {
    return !!(await this.getNumberOfBreaches(password));
  }
}
