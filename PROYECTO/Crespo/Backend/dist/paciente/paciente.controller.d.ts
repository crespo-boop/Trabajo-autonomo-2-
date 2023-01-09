import { CreatepacienteDTO } from './dto/create-paciente.dto';
import { PacienteService } from './paciente.service';
export declare class PacienteController {
    private pacienteService;
    constructor(pacienteService: PacienteService);
    createPost(res: any, createpacienteDTO: CreatepacienteDTO): Promise<any>;
    getPacientes(res: any): Promise<any>;
    getPaciente(res: any, PacienteID: any): Promise<any>;
    updatePaciente(res: any, createpacienteDTO: CreatepacienteDTO, PacienteID: any): Promise<any>;
    deletePaciente(res: any, PacienteID: any): Promise<any>;
}
