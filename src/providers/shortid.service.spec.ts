import { ShortIdService } from "./shortid.service";
const shortIdService = new ShortIdService();

describe("ShortIdService", () => {
  describe("generate", () => {
    it("generates a short id", () => {
      const shortId = shortIdService.generate();
      expect(shortId).toBeDefined();
    });

    it("generates a string", () => {
      const shortId = shortIdService.generate();
      expect(typeof shortId).toBe("string");
    });

    it("generates a 10 character string", () => {
      const shortId = shortIdService.generate();
      expect(shortId.length).toBe(10);
    });

    it("generates a prefixed string", () => {
      const shortId = shortIdService.generate("hello");
      expect(shortId.startsWith("hello-")).toBeTruthy();
    });
  });
});
