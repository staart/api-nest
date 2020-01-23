import { Controller, Ip } from "@nestjs/common";
import { Crud, Override, ParsedRequest, CrudRequest, ParsedBody, CrudController } from "@nestjsx/crud";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

@Crud({
  model: {
    type: User
  },
  query: {
    exclude: [
      "password",
      "twoFactorSecret"
    ]
  }
})
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
    return this.base.createOneBase(req, await this.service.addDefaultValuesToNewUser(dto, ipAddress));
  }
}
