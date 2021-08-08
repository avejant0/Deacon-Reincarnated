import { CreateUserDto, GetUserDto, UpdateUserDto } from "./dto";
import { User } from "./entities/user.entity";

export class UserMapper {
  toGetDto(user: User): GetUserDto {
    const { login, name, email, createdAt, updatedAt } = user;
    return { login, name, email, createdAt: createdAt.toString(), updatedAt: updatedAt.toString() };
  }

  toCreateModel(dto: CreateUserDto): User {
    const user = new User();
    user.login = dto.login;
    user.email = dto.email;
    user.name = dto.name;
    user.passwordHash = this.encrypt(dto.password);
    return user;
  }

  toUpdateModel(dto: UpdateUserDto): User {
    const user = new User();
    const { login, email, name, password } = dto;
    if (login) {
      user.login = login;
    }

    if (email) {
      user.email = email;
    }

    if (name) {
      user.name = name;
    }

    if (password) {
      user.passwordHash = this.encrypt(password);
    }

    return user;
  }

  private encrypt(password: string) {
    return 'passwordhashjiij';
  }
}