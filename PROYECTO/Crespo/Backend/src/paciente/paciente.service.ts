import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Paciente } from './interfaces/paciente.interface';
import { CreatepacienteDTO } from './dto/create-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(
    @InjectModel('Paciente') private readonly PacienteModule: Model<Paciente>,
  ) {}

  async getPacientes(): Promise<Paciente[]> {
    const Pacientex = await this.PacienteModule.find();
    return Pacientex;
  }
  async getPaciente(PacienteID: string): Promise<Paciente> {
    const pacientex = await this.PacienteModule.findById(PacienteID);
    return pacientex;
  }
  async createPacientes(
    createpacienteDTO: CreatepacienteDTO,
  ): Promise<Paciente> {
    const pacientex = new this.PacienteModule(createpacienteDTO);
    return await pacientex.save();
  }

  async deletePacientes(PacienteID: string): Promise<Paciente> {
    const deletepacientex = await this.PacienteModule.findByIdAndDelete(
      PacienteID,
    );
    return deletepacientex;
  }

  async updatePacientes(
    pacienteID: string,
    createpacienteDTO: CreatepacienteDTO,
  ): Promise<Paciente> {
    const updatepacientex = await this.PacienteModule.findByIdAndUpdate(
      pacienteID,
      createpacienteDTO,
      { new: true },
    );
    return updatepacientex;
  }
}
