import { Injectable } from "@nestjs/common";

@Injectable()
export class StringUtilsService {
  upperFirst(string: string) {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
  }

  upperFirstAndLastWord(string: string) {
    return string.split(" ").map((word, index) => index === 0 || index === string.length - 1 ? this.upperFirst(word) : word).join(" ");
  }
}
