import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({
  name: 'students',
})
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  @Field()
  name: string;

  @Column({
    name: 'CPF',
    type: 'varchar',
    length: '14',
    nullable: true,
    unique: true,
  })
  @Field()
  document: string;

  @Column({
    name: 'email',
    type: 'varchar',
    nullable: true,
    length: 250,
  })
  @Field()
  email: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
  })
  deletedAt: Date;

  constructor(name: string, document: string, email: string) {
    super();
    this.name = name;
    this.document = document;
    this.email = email;
  }
}
