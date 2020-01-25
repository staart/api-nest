import { PwnedService } from "./pwned.service";
const pwnedService = new PwnedService();

const BREACHED = "password123";
const NOT_BREACHED = "kjRl4TwdnlYtk8FhVyUU";

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

    it("breached detection false", async () => {
      const isBreached = await pwnedService.checkIsPasswordIsPwned(
        NOT_BREACHED
      );
      expect(isBreached).toBeFalsy();
    });

    it("breached 0 times", async () => {
      const timesBreached = await pwnedService.getNumberOfBreaches(
        NOT_BREACHED
      );
      expect(timesBreached).toBe(0);
    });
  });
});
