import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateResultadoDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly idPacienete: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly idTipoExamen: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly ResultadoExamen: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly ValorPagado: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Observaciones: string;
}
