import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';


export class PatientAppointmentsDto {


  @Expose()
  @ApiProperty()
  id: number;




}
