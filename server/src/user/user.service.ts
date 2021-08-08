import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, GetUserDto, UpdateUserDto } from './dto';
import { User } from './entities/user.entity';
import { UserMapper } from './user.mapper';

@Injectable()
export class UserService {
  private readonly mapper: UserMapper;

  constructor(@InjectRepository(User) private repository: Repository<User>) {
    this.mapper = new UserMapper();
  }
  
  async findAll(): Promise<GetUserDto[]> {
    const users = await this.repository.find();
    return users.map((user) => this.mapper.toGetDto(user));
  }

  async findAllByEmail(email: string): Promise<GetUserDto[]> {
    const users = await this.repository.find({ email });
    return users.map((user) => this.mapper.toGetDto(user));
  }

  async findByLogin(login: string): Promise<GetUserDto | null> {
    const user = await this.repository.findOne({ login });
    if (!user) {
      return null;
    }

    return this.mapper.toGetDto(user);
  }

  async create(createUserDto: CreateUserDto): Promise<GetUserDto> {
    const userToCreate: User = this.mapper.toCreateModel(createUserDto);
    const createdUser = await this.repository.save(userToCreate);
    return this.mapper.toGetDto(createdUser);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
