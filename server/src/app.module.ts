import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

import typeormConfig from './typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(typeormConfig()),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
