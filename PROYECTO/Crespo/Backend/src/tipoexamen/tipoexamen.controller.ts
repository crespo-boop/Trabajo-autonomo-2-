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
import { CreatetipoexamenDTO } from './dto/create-tipoexamen.dto';
import { TipoExamenService } from './tipoexamen.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tipo Examen Schema')
@Controller('tipoexamen')
export class TipoExamenController {
  constructor(private tipoExamenService: TipoExamenService) {}

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'Creacion del modelo de datos Tipo Examen',
  })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async createPost(
    @Res() res,
    @Body() createtipoexamenDTO: CreatetipoexamenDTO,
  ) {
    const Texamenex = await this.tipoExamenService.createTipoexamen(
      createtipoexamenDTO,
    );

    return res.status(HttpStatus.OK).json({
      message: 'tipo de examen recibido',
      Texamenex: Texamenex,
    });
  }
  @Get('/list')
  @ApiResponse({ status: 200, description: 'Busqueda de los datos en DB' })
  @ApiResponse({ status: 400, description: 'Elementos no encontrados' })
  async getTipoexamenes(@Res() res) {
    const TExamenex = await this.tipoExamenService.getTipoexamenes();
    return res.status(HttpStatus.OK).json({
      message: 'Aqui esta el listado de los tipo de examenes',
      TExamenex,
    });
  }
  @Get('/:TExamenID')
  @ApiResponse({
    status: 200,
    description: 'Busqueda de los datos por id en DB',
  })
  @ApiResponse({ status: 400, description: 'Elementos no encontrados' })
  async getTipoexamen(@Res() res, @Param('TExamenID') TExamenID) {
    const TExamenex = await this.tipoExamenService.getTipoexamen(TExamenID);
    if (!TExamenex) throw new NotFoundException('Examen no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Aqui esta las expecificaciones del examen que solicito',
      TExamenex,
    });
  }
  @Put('/update')
  @ApiResponse({ status: 200, description: 'Actualizacion completada' })
  @ApiResponse({ status: 400, description: 'Elemento no actualizado' })
  async updatePaciente(
    @Res() res,
    @Body() createtipoexamenDTO: CreatetipoexamenDTO,
    @Query('TExamenID') TExamenID,
  ) {
    const TExamenex = await this.tipoExamenService.updateTipoexamen(
      TExamenID,
      createtipoexamenDTO,
    );
    if (!TExamenex) throw new NotFoundException('Examen no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'tipo de examen modificado correctamente',
      TExamenex,
    });
  }
  @Delete('/delete')
  @ApiResponse({ status: 200, description: 'Eliminacion completada' })
  @ApiResponse({ status: 400, description: 'Elemento no Eliminado' })
  async deletePaciente(@Res() res, @Query('TExamenID') TExamenID) {
    const TExamenex = await this.tipoExamenService.deleteTipoexamen(TExamenID);
    if (!TExamenex) throw new NotFoundException('Examen no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'tipo de examen eliminado',
      TExamenex,
    });
  }
}
