import { Model } from 'mongoose';
import { Paciente } from './interfaces/paciente.interface';
import { CreatepacienteDTO } from './dto/create-paciente.dto';
export declare class PacienteService {
    private readonly PacienteModule;
    constructor(PacienteModule: Model<Paciente>);
    getPacientes(): Promise<Paciente[]>;
    getPaciente(PacienteID: string): Promise<Paciente>;
    createPacientes(createpacienteDTO: CreatepacienteDTO): Promise<Paciente>;
    deletePacientes(PacienteID: string): Promise<Paciente>;
    updatePacientes(pacienteID: string, createpacienteDTO: CreatepacienteDTO): Promise<Paciente>;
}
