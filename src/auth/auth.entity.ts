import { ApiProperty } from "@nestjs/swagger";

export class PwnedPasswordBody {
  @ApiProperty()
  password: string;
}
