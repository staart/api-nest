import { PwnedService } from "./pwned.service";
const pwnedService = new PwnedService();
jest.setTimeout(30000);

const BREACHED = "password123";

describe("PwnedService", () => {
  describe("check if password is breached", () => {
    it("breached detection true", async () => {
      const isBreached = await pwnedService.checkIsPasswordIsPwned(BREACHED);
      expect(isBreached).toBeTruthy();
    });

    it("breached many times", async () => {
      const timesBreached = await pwnedService.getNumberOfBreaches(BREACHED);
      expect(timesBreached).toBeGreaterThan(5);
    });
  });
});
