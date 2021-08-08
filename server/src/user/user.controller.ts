import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, BadRequestException, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto, GetUserDto } from './dto';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiQuery({
    name: 'email',
    required: false,
    type: String,
  })
  @ApiResponse({ status: 200, type: GetUserDto, isArray: true })
  @Get()
  async findAll(@Query('email') email: string = null): Promise<GetUserDto[]> {
    if (!email) {
      return this.userService.findAll();
    }
    
    return this.userService.findAllByEmail(email);
  }

  @ApiResponse({ status: 200, type: GetUserDto })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @Get(':login')
  async findByLogin(@Param('login') login: string): Promise<GetUserDto> {
    const user = await this.userService.findByLogin(login);

    if (!user) {
      throw new NotFoundException();
    }
    
    return user;
  }

  @ApiResponse({ status: 200, type: GetUserDto })
  @ApiResponse({ status: 400, description: 'Bad Request'})
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<GetUserDto> {
    try {
      return await this.userService.create(createUserDto);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
