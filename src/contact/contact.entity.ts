import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import {
  IsOptional,
  IsDefined,
  IsString,
  IsNumber,
  IsBoolean
} from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";
import { ContactTypes } from "./contact.interfaces";

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Contact {
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn()
  id: number;

  @IsDefined({ always: true })
  @IsNumber(undefined, { always: true })
  @Column()
  userId: number;

  @IsDefined({ always: true })
  @IsString({ always: true })
  @Column({ length: "5" })
  type: ContactTypes;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ unique: true })
  value: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ nullable: true })
  countryCode: string;

  @IsOptional({ always: true })
  @IsBoolean({ always: true })
  @Column({ default: false })
  verified: boolean;
}
