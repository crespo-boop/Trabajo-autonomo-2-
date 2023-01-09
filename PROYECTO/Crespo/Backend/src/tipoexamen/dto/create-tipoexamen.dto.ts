import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatetipoexamenDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Descripcion: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Indicaciones: string;
}
