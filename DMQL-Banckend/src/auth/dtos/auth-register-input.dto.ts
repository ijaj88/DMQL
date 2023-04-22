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


  @ApiProperty({  })
  @IsNotEmpty()
  // These keys can only be set by ADMIN user.
  roles: ROLE[];
  isAccountDisabled: boolean;
}
