import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { IsOptional, IsDefined, IsString, IsBoolean } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";
import { ContactTypes } from "./contact.interfaces";
import { User } from "../user/user.entity";

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Contact {
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @ManyToOne(
    type => User,
    user => user.contacts,
    { onDelete: "CASCADE" }
  )
  user: User;

  @IsDefined({ always: true })
  @IsString({ always: true })
  @Column({ length: "5" })
  type: ContactTypes;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @IsString({ always: true })
  @Column()
  value: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ nullable: true })
  countryCode: string;

  @IsOptional({ always: true })
  @IsBoolean({ always: true })
  @Column({ default: false })
  verified: boolean;

  /**
   * Created and updated times
   */

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
