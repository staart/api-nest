import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginBody {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

export class RegisterBody {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class UsernameAvailableBody {
  @ApiProperty()
  username: string;
}

export class PwnedPasswordBody {
  @ApiProperty()
  password: string;
}
