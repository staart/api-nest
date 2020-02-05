import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Contact } from "./contact.entity";
import { ContactsService } from "./contact.service";
import { ApiTags } from "@nestjs/swagger";

@Crud({
  model: {
    type: Contact
  }
})
@ApiTags("contact")
@Controller("contact")
export class ContactController {
  constructor(public service: ContactsService) {}
}
