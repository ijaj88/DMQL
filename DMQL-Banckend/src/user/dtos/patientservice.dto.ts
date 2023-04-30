import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { ROLE } from 'src/auth/constants/role.constant';

export class BookingService {

  
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  servicenumder: number;





}
