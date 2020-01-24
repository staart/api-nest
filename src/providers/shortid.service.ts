import { Injectable } from "@nestjs/common";
import generate from "nanoid/generate";

@Injectable()
export class ShortIdService {
  generate(prefix?: string) {
    const ID = generate("0123456789abcdefghijklmnopqrstuvwxyz", 10);
    if (prefix) return `${prefix.toLowerCase()}-${ID}`;
    return ID;
  }
}
