import { Controller, Ip } from "@nestjs/common";
import {
  Crud,
  Override,
  ParsedRequest,
  CrudRequest,
  ParsedBody,
  CrudController
} from "@nestjsx/crud";
import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { ApiTags } from "@nestjs/swagger";

@Crud({
  model: {
    type: User
  },
  query: {
    exclude: ["password", "twoFactorSecret"]
  }
})
@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(public service: UsersService) {}

  get base(): CrudController<User> {
    return this;
  }

  @Override()
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: User,
    @Ip() ipAddress: string
  ) {
    dto = await this.service.safeNewUserValue(dto, ipAddress);
    return this.base.createOneBase(req, dto);
  }
}
