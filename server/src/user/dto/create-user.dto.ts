import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty()
  login: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
