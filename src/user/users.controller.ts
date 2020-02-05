import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { ApiTags } from "@nestjs/swagger";

@Crud({
  model: {
    type: User
  },
  routes: {
    exclude: ["createOneBase", "createManyBase"]
  },
  query: {
    exclude: ["password", "twoFactorSecret"]
  }
})
@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(public service: UsersService) {}
}
