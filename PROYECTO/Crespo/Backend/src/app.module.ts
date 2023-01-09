import { Module } from '@nestjs/common';
import { PacienteModule } from './paciente/paciente.module';
import { TipoExamenModule } from './tipoexamen/tipoexamen.module';
import { ResultadosModule } from './resultados/resultados.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactanosModule } from './contactanos/contactanos.module';


@Module({
  imports: [
    PacienteModule,
    TipoExamenModule,
    ResultadosModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),
    ContactanosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
