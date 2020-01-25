import { ApiProperty } from "@nestjs/swagger";

export class LoginBody {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

export class UsernameAvailableBody {
  @ApiProperty()
  username: string;
}

export class PwnedPasswordBody {
  @ApiProperty()
  password: string;
}
