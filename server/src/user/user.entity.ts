import { Entity,Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  identity: string;

  @Column()
  login: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  passwordHash: string;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}