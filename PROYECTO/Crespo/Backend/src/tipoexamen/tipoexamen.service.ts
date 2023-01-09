import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Texamen } from './interfaces/tipoexamen.interfaces';
import { CreatetipoexamenDTO } from './dto/create-tipoexamen.dto';

@Injectable()
export class TipoExamenService {
  constructor(
    @InjectModel('TExamen') private readonly TipoExamenModule: Model<Texamen>,
  ) {}

  async getTipoexamenes(): Promise<Texamen[]> {
    const TExamenex = await this.TipoExamenModule.find();
    return TExamenex;
  }
  async getTipoexamen(TExamenID: string): Promise<Texamen> {
    const TExamenex = await this.TipoExamenModule.findById(TExamenID);
    return TExamenex;
  }
  async createTipoexamen(
    createtipoexamenDTO: CreatetipoexamenDTO,
  ): Promise<Texamen> {
    const TExamenex = new this.TipoExamenModule(createtipoexamenDTO);
    return await TExamenex.save();
  }

  async deleteTipoexamen(TExamenID: string): Promise<Texamen> {
    const deletetexamenex = await this.TipoExamenModule.findByIdAndDelete(
      TExamenID,
    );
    return deletetexamenex;
  }

  async updateTipoexamen(
    TExamenID: string,
    createtipoexamenDTO: CreatetipoexamenDTO,
  ): Promise<Texamen> {
    const updatetexamenex = await this.TipoExamenModule.findByIdAndUpdate(
      TExamenID,
      createtipoexamenDTO,
      { new: true },
    );
    return updatetexamenex;
  }
}
