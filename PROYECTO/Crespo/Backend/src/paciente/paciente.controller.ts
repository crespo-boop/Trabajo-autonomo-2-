import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
  NotFoundException,
  Query,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatepacienteDTO } from './dto/create-paciente.dto';
import { PacienteService } from './paciente.service';

@ApiTags('Paciente Schema')
@Controller('paciente')
export class PacienteController {
  constructor(private pacienteService: PacienteService) {}

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'Creacion del modelo de datos Paciente',
  })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async createPost(@Res() res, @Body() createpacienteDTO: CreatepacienteDTO) {
    const Pacientex = await this.pacienteService.createPacientes(
      createpacienteDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Paciente recibido',
      Pacientex: Pacientex,
    });
  }
  @Get('/list')
  @ApiResponse({ status: 200, description: 'Busqueda de los datos en DB' })
  @ApiResponse({ status: 400, description: 'Elementos no encontrados' })
  async getPacientes(@Res() res) {
    const Pacientex = await this.pacienteService.getPacientes();
    return res.status(HttpStatus.OK).json({
      message: 'Aqui esta el listado de pacientes',
      Pacientex,
    });
  }
  @Get('/:PacienteID')
  @ApiResponse({
    status: 200,
    description: 'Busqueda de los datos por id en DB',
  })
  @ApiResponse({ status: 400, description: 'Elementos no encontrados' })
  async getPaciente(@Res() res, @Param('PacienteID') PacienteID) {
    const Pacientex = await this.pacienteService.getPaciente(PacienteID);
    if (!Pacientex) throw new NotFoundException('Paciente no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Aqui esta el paciente que solicito',
      Pacientex,
    });
  }
  @Put('/update')
  @ApiResponse({ status: 200, description: 'Actualizacion completada' })
  @ApiResponse({ status: 400, description: 'Elemento no actualizado' })
  async updatePaciente(
    @Res() res,
    @Body() createpacienteDTO: CreatepacienteDTO,
    @Query('PacienteID') PacienteID,
  ) {
    const Pacientex = await this.pacienteService.updatePacientes(
      PacienteID,
      createpacienteDTO,
    );
    if (!Pacientex) throw new NotFoundException('Paciente no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Paciente modificado correctamente',
      Pacientex,
    });
  }
  @Delete('/delete')
  @ApiResponse({ status: 200, description: 'Eliminacion completada' })
  @ApiResponse({ status: 400, description: 'Elemento no Eliminado' })
  async deletePaciente(@Res() res, @Query('PacienteID') PacienteID) {
    const Pacientex = await this.pacienteService.deletePacientes(PacienteID);
    if (!Pacientex) throw new NotFoundException('Paciente no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Paciente eliminado',
      Pacientex,
    });
  }
}
