import { Injectable, ConflictException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { GeolocationService } from "../providers/geolocation.service";
import { StringUtilsService } from "../providers/stringutils.service";
import { ShortIdService } from "../providers/shortid.service";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User) repo: Repository<User>,
    public geolocationService: GeolocationService,
    public stringUtilsService: StringUtilsService,
    public shortIdService: ShortIdService
  ) {
    super(repo);
  }

  public async safeCreateUser(dto: User, ipAddress: string) {
    dto = await this.safeNewUserValue(dto, ipAddress);
    return await this.repo.save(dto);
  }
  public async safeUpdateUser(id: number, user: QueryDeepPartialEntity<User>) {
    return await this.repo.update({ id }, user);
  }
  public async safeGetUser(id: number) {
    return await this.repo.findOne(id);
  }

  public async safeNewUserValue(dto: User, ipAddress: string) {
    dto = this.deleteSudoValuesFromNewUser(dto);
    dto = await this.addDefaultValuesToNewUser(dto, ipAddress);
    dto = this.normalizeUserNamesCase(dto);
    if (await this.checkIfUsernameExists(dto.username))
      throw new ConflictException("Username already in use");
    return dto;
  }

  private deleteSudoValuesFromNewUser(dto: User) {
    delete dto.role;
    return dto;
  }

  private normalizeUserNamesCase(dto: User) {
    dto.name = this.stringUtilsService.upperFirstAndLastWord(dto.name);
    dto.nickname = this.stringUtilsService.upperFirst(dto.nickname);
    return dto;
  }

  private async addDefaultValuesToNewUser(dto: User, ipAddress: string) {
    dto.nickname = dto.nickname || dto.name.split(" ")[0];
    dto.username = dto.username || this.shortIdService.generate(dto.nickname);
    if (!(dto.countryCode && dto.timezone)) {
      const location = await this.geolocationService.getGeolocationFromIp(
        ipAddress
      );
      dto.countryCode =
        dto.countryCode || location.country.iso_code.toLowerCase() || "us";
      dto.timezone =
        dto.timezone || location.location.time_zone || "America/Los_Angeles";
    }
    return dto;
  }

  private async checkIfUsernameExists(username: string) {
    try {
      return !!(await this.findOne({ username }));
    } catch {
      return false;
    }
  }

  async checkIfUsernameAvailable(username: string) {
    return !(await this.checkIfUsernameExists(username));
  }
}
