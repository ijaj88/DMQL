import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

import { ROLE } from '../constants/role.constant';

export class RegisterInput {
  @ApiProperty({ example: 'hkakkad' })
  @MaxLength(200)
  @IsString()
  username: string;

  @ApiProperty({ example: 'pkpk1212' })
  @IsNotEmpty()
  @Length(6, 100)
  @IsString()
  password: string;

  @ApiProperty({ example: 'ADMIN/DOCTOR' })
  @IsNotEmpty()
  @Length(4, 100)
  @IsString()
  TYPE: string;

  // These keys can only be set by ADMIN user.
  roles: ROLE[];

  isAccountDisabled: boolean;
}




export class patientRegister {

  @ApiProperty({ example: 'ijaj' })
  @MaxLength(200)
  @IsString()
  username: string;

  @ApiProperty({ example: 'pkpk1212' })
  @IsNotEmpty()
  @Length(6, 100)
  @IsString()
  password: string;

  @ApiProperty({ example: 'PATIENT' })
  @IsNotEmpty()
  @Length(4, 100)
  @IsString()
  TYPE: string;

  // These keys can only be set by ADMIN user.
  roles: ROLE[];

  @ApiProperty({ example: 'ijaj' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  firstname?: string;


  @ApiProperty({ example: 'Ahmed' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  lastname?: string;

  @ApiProperty({ example: 'male' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  sex?: string;


  @ApiProperty({ example: '26' })
  @IsOptional()
  age?: number;

  @ApiProperty({ example: '89899826' })
  @IsOptional()
  phonenumber?: number;
  
  @ApiProperty({ example: '89899826' })
  @IsOptional()
  emergencycontact?: number;


  @ApiProperty({ example: '0' })
  @IsOptional()
  isAccountDisabled: boolean;

  @ApiProperty({ example: 'ijaj@buffalo.hmail' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  email: string;

}

export class DoctorRegister {

  @ApiProperty({ example: 'ijaj' })
  @MaxLength(200)
  @IsString()
  username: string;

  @ApiProperty({ example: 'pkpk1212' })
  @IsNotEmpty()
  @Length(6, 100)
  @IsString()
  password: string;

  @ApiProperty({ example: 'DOCTOR' })
  @IsNotEmpty()
  @Length(4, 100)
  @IsString()
  TYPE: string;

  // These keys can only be set by ADMIN user.
  roles: ROLE[];

  @ApiProperty({ example: 'ijaj' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  firstname?: string;


  @ApiProperty({ example: 'Ahmed' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  lastname?: string;

  @ApiProperty({ example: 'male' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  sex?: string;


  @ApiProperty({ example: '26' })
  @IsOptional()
  age?: number;

  @ApiProperty({ example: 'Neuro' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  speciality?: string;
  

  @ApiProperty({ example: '0' })
  @IsOptional()
  isAccountDisabled: boolean;

  @ApiProperty({ example: 'ijaj@buffalo.hmail' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  email: string;

}

export class AdminRegister {

  @ApiProperty({ example: 'ijaj' })
  @MaxLength(200)
  @IsString()
  username: string;

  @ApiProperty({ example: 'pkpk1212' })
  @IsNotEmpty()
  @Length(6, 100)
  @IsString()
  password: string;

  @ApiProperty({ example: 'ADMIN' })
  @IsNotEmpty()
  @Length(4, 100)
  @IsString()
  TYPE: string;

  // These keys can only be set by ADMIN user.
  roles: ROLE[];

  @ApiProperty({ example: 'ijaj' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  firstname?: string;


  @ApiProperty({ example: 'Ahmed' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  lastname?: string;

  @ApiProperty({ example: 'male' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  sex?: string;


  @ApiProperty({ example: '26' })
  @IsOptional()
  age?: number;

  @ApiProperty({ example: 'Owner' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  speciality?: string;
  

  @ApiProperty({ example: '0' })
  @IsOptional()
  isAccountDisabled: boolean;

  @ApiProperty({ example: 'ijaj@buffalo.hmail' })
  @MaxLength(200)
  @IsString()
  @IsOptional()
  email: string;

}