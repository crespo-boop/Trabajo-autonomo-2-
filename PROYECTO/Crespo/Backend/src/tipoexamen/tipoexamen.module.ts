import { Module } from '@nestjs/common';
import { TipoExamenController } from './tipoexamen.controller';
import { TipoExamenService } from './tipoexamen.service';
import { MongooseModule } from '@nestjs/mongoose';
import { texamenschema } from './schemas/tipoexamen.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'TExamen', schema: texamenschema }]),
  ],
  controllers: [TipoExamenController],
  providers: [TipoExamenService],
})
export class TipoExamenModule {}
