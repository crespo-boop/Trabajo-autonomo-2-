import { CreateResultadoDTO } from './dto/create-resultados.dto';
import { ResultadosService } from './resultados.service';
export declare class ResultadosController {
    private resultadosService;
    constructor(resultadosService: ResultadosService);
    createPost(res: any, createresultadoDTO: CreateResultadoDTO): Promise<any>;
    getPacientes(res: any): Promise<any>;
    getPaciente(res: any, ResultadoID: any): Promise<any>;
    updatePaciente(res: any, createresultadoDTO: CreateResultadoDTO, ResultadoID: any): Promise<any>;
    deletePaciente(res: any, ResultadoID: any): Promise<any>;
}
