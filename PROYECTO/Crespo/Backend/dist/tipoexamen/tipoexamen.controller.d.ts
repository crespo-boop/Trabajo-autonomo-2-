import { CreatetipoexamenDTO } from './dto/create-tipoexamen.dto';
import { TipoExamenService } from './tipoexamen.service';
export declare class TipoExamenController {
    private tipoExamenService;
    constructor(tipoExamenService: TipoExamenService);
    createPost(res: any, createtipoexamenDTO: CreatetipoexamenDTO): Promise<any>;
    getTipoexamenes(res: any): Promise<any>;
    getTipoexamen(res: any, TExamenID: any): Promise<any>;
    updatePaciente(res: any, createtipoexamenDTO: CreatetipoexamenDTO, TExamenID: any): Promise<any>;
    deletePaciente(res: any, TExamenID: any): Promise<any>;
}
