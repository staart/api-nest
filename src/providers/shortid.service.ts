import { Injectable } from "@nestjs/common";
import shortid from "shortid";

shortid.characters("0123456789abcdefghijklmnopqrstuvwxyz");

@Injectable()
export class ShortIdService {
  generate(prefix?: string) {
    if (prefix) return `${prefix.toLowerCase()}-${shortid.generate()}`;
    return shortid.generate();
  }

  isValid(id: string) {
    return shortid.isValid(id);
  }
}
