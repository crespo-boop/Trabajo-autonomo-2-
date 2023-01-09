import { Module } from '@nestjs/common';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';
import { MongooseModule } from '@nestjs/mongoose';
import { pacienteschema } from './schemas/paciente.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Paciente', schema: pacienteschema }]),
  ],
  controllers: [PacienteController],
  providers: [PacienteService],
})
export class PacienteModule {}
