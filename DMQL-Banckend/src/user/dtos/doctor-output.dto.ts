import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { ROLE } from '../../auth/constants/role.constant';

export class DoctOutput {


  @Expose()
  @ApiProperty()
  id: number;


  @Expose()
  @ApiProperty()
  firstname: string;

  @Expose()
  @ApiProperty()
  lastname: string;

  @Expose()
  @ApiProperty()
  sex: string;
  @Expose()
  @ApiProperty()
  speciality: string;
  @Expose()
  @ApiProperty()
  age: number;

  @Expose()
  @ApiProperty()
  username: string;
  @Expose()
  @ApiProperty()
  isAccountDisabled: boolean;

  @Expose()
  @ApiProperty()
  email: string;
}
