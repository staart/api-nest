import { StringUtilsService } from "./stringutils.service";
const stringUtilsService = new StringUtilsService();

describe("StringUtilsService", () => {
  describe("generate", () => {
    it("capitalizes a lowercase string", () => {
      const capitalized = stringUtilsService.upperFirst("anand");
      expect(capitalized).toBe("Anand");
    });

    it("capitalizes an uppercase string", () => {
      const capitalized = stringUtilsService.upperFirst("ANAND");
      expect(capitalized).toBe("Anand");
    });

    it("capitalizes a mixed case string", () => {
      const capitalized = stringUtilsService.upperFirst("ANand");
      expect(capitalized).toBe("Anand");
    });

    it("capitalizes a capitalized string", () => {
      const capitalized = stringUtilsService.upperFirst("Anand");
      expect(capitalized).toBe("Anand");
    });

    it("capitalizes first and last word of lowercase string", () => {
      const capitalized = stringUtilsService.upperFirstAndLastWord(
        "anand chowdhary"
      );
      expect(capitalized).toBe("Anand Chowdhary");
    });

    it("capitalizes first and last word of uppercase string", () => {
      const capitalized = stringUtilsService.upperFirstAndLastWord(
        "ANAND CHOWDHARY"
      );
      expect(capitalized).toBe("Anand Chowdhary");
    });

    it("capitalizes first and last word of mixed case string", () => {
      const capitalized = stringUtilsService.upperFirstAndLastWord(
        "ANAND chowdhary"
      );
      expect(capitalized).toBe("Anand Chowdhary");
    });

    it("capitalizes first and last word of mixed case string", () => {
      const capitalized = stringUtilsService.upperFirstAndLastWord(
        "anAnD cHoWdHARY"
      );
      expect(capitalized).toBe("Anand Chowdhary");
    });

    it("capitalizes first and last word of capitalized string", () => {
      const capitalized = stringUtilsService.upperFirstAndLastWord(
        "Anand Chowdhary"
      );
      expect(capitalized).toBe("Anand Chowdhary");
    });

    it("capitalizes first and last word of three-word string", () => {
      const capitalized = stringUtilsService.upperFirstAndLastWord(
        "Anand MiddleName Chowdhary"
      );
      expect(capitalized).toBe("Anand MiddleName Chowdhary");
    });

    it("capitalizes first and last word of multi-word string", () => {
      const capitalized = stringUtilsService.upperFirstAndLastWord(
        "anand van der chowdhary"
      );
      expect(capitalized).toBe("Anand van der Chowdhary");
    });

    it("capitalizes first and last word of capitalized string", () => {
      const capitalized = stringUtilsService.upperFirstAndLastWord(
        "Anand van der Chowdhary"
      );
      expect(capitalized).toBe("Anand van der Chowdhary");
    });
  });
});
