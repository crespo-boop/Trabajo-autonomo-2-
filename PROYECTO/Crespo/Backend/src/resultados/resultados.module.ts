import { Module } from '@nestjs/common';
import { ResultadosController } from './resultados.controller';
import { ResultadosService } from './resultados.service';
import { MongooseModule } from '@nestjs/mongoose';
import { resultadoschema } from './schemas/resultados.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Resultado', schema: resultadoschema }]),
  ],
  controllers: [ResultadosController],
  providers: [ResultadosService],
})
export class ResultadosModule {}
