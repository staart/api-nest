import { Injectable } from "@nestjs/common";
import { open } from "geolite2-redist";
import maxmind, { CityResponse, Reader } from "maxmind";

@Injectable()
export class GeolocationService {
  lookup?: Reader<CityResponse>;

  async initializeService() {
    if (!this.lookup)
      this.lookup = await open<CityResponse>("GeoLite2-City", path =>
        maxmind.open(path)
      );
  }

  async getGeolocationFromIp(ipAddress: string) {
    if (ipAddress === "::1") ipAddress = "130.89.88.184";
    await this.initializeService();
    return this.lookup.get(ipAddress);
  }
}
