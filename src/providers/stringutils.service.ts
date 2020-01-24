import { Injectable } from "@nestjs/common";

@Injectable()
export class StringUtilsService {
  upperFirst(text: string) {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
  }

  upperFirstAndLastWord(text: string) {
    return text
      .split(" ")
      .map((word, index) =>
        index === 0 || index === text.length - 1 ? this.upperFirst(word) : word
      )
      .join(" ");
  }
}
