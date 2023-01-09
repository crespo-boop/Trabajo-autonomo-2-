import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatepacienteDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Nombre: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Tsangre: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Identificacion: string;
}
