import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Resultado } from './interfaces/resultados.interface';
import { CreateResultadoDTO } from './dto/create-resultados.dto';

@Injectable()
export class ResultadosService {
  constructor(
    @InjectModel('Resultado')
    private readonly ResultadoModule: Model<Resultado>,
  ) {}

  async getResultados(): Promise<Resultado[]> {
    const Resultadox = await this.ResultadoModule.find();
    return Resultadox;
  }
  async getResultado(ResultadoID: string): Promise<Resultado> {
    const Resultadox = await this.ResultadoModule.findById(ResultadoID);
    return Resultadox;
  }
  async createResultados(
    createresultadoDTO: CreateResultadoDTO,
  ): Promise<Resultado> {
    const Resultadox = new this.ResultadoModule(createresultadoDTO);
    return await Resultadox.save();
  }
  async deleteResultados(ResultadoID: string): Promise<Resultado> {
    const deleteresultadox = await this.ResultadoModule.findByIdAndDelete(
      ResultadoID,
    );
    return deleteresultadox;
  }
  async updateResultados(
    ResultadoID: string,
    createresultadoDTO: CreateResultadoDTO,
  ): Promise<Resultado> {
    const updateresultadox = await this.ResultadoModule.findByIdAndUpdate(
      ResultadoID,
      createresultadoDTO,
      { new: true },
    );
    return updateresultadox;
  }
}
