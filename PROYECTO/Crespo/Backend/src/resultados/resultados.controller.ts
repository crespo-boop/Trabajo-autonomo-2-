import {
  Controller,
  Post,
  Res,
  HttpStatus,
  Body,
  Get,
  Param,
  NotFoundException,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { CreateResultadoDTO } from './dto/create-resultados.dto';
import { ResultadosService } from './resultados.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Resultados Schema')
@Controller('resultados')
export class ResultadosController {
  constructor(private resultadosService: ResultadosService) {}

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'Creacion del modelo de datos Resultados',
  })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async createPost(@Res() res, @Body() createresultadoDTO: CreateResultadoDTO) {
    const Resultadox = await this.resultadosService.createResultados(
      createresultadoDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Resultado recibido',
      Resultadox: Resultadox,
    });
  }
  @Get('/list')
  @ApiResponse({ status: 200, description: 'Busqueda de los datos en DB' })
  @ApiResponse({ status: 400, description: 'Elementos no encontrados' })
  async getPacientes(@Res() res) {
    const Resultadox = await this.resultadosService.getResultados();
    return res.status(HttpStatus.OK).json({
      message: 'Aqui esta el listado de resultados',
      Resultadox,
    });
  }
  @Get('/:ResultadoID')
  @ApiResponse({
    status: 200,
    description: 'Busqueda de los datos por id en DB',
  })
  @ApiResponse({ status: 400, description: 'Elementos no encontrados' })
  async getPaciente(@Res() res, @Param('ResultadoID') ResultadoID) {
    const Resultadox = await this.resultadosService.getResultado(ResultadoID);
    if (!Resultadox)
      throw new NotFoundException('Resultado no encontrado no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Aqui esta el resultado que solicito',
      Resultadox,
    });
  }
  @Put('/update')
  @ApiResponse({ status: 200, description: 'Actualizacion completada' })
  @ApiResponse({ status: 400, description: 'Elemento no actualizado' })
  async updatePaciente(
    @Res() res,
    @Body() createresultadoDTO: CreateResultadoDTO,
    @Query('ResultadoID') ResultadoID,
  ) {
    const Resultadox = await this.resultadosService.updateResultados(
      ResultadoID,
      createresultadoDTO,
    );
    if (!Resultadox) throw new NotFoundException('resultado no existe');
    return res.status(HttpStatus.OK).json({
      message: 'resultado modificado correctamente',
      Resultadox,
    });
  }
  @Delete('/delete')
  @ApiResponse({ status: 200, description: 'Eliminacion completada' })
  @ApiResponse({ status: 400, description: 'Elemento no Eliminado' })
  async deletePaciente(@Res() res, @Query('ResultadoID') ResultadoID) {
    const Resultadox = await this.resultadosService.deleteResultados(
      ResultadoID,
    );
    if (!Resultadox) throw new NotFoundException('resultado no existe');
    return res.status(HttpStatus.OK).json({
      message: 'resultado eliminado',
      Resultadox,
    });
  }
}
