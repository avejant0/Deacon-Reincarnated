import { ApiProperty } from "@nestjs/swagger";

export class GetUserDto {
  @ApiProperty()
  login: string;

  @ApiProperty()
  name: string;
  
  @ApiProperty()
  email: string;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;
}
