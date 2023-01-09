import { Model } from 'mongoose';
import { Texamen } from './interfaces/tipoexamen.interfaces';
import { CreatetipoexamenDTO } from './dto/create-tipoexamen.dto';
export declare class TipoExamenService {
    private readonly TipoExamenModule;
    constructor(TipoExamenModule: Model<Texamen>);
    getTipoexamenes(): Promise<Texamen[]>;
    getTipoexamen(TExamenID: string): Promise<Texamen>;
    createTipoexamen(createtipoexamenDTO: CreatetipoexamenDTO): Promise<Texamen>;
    deleteTipoexamen(TExamenID: string): Promise<Texamen>;
    updateTipoexamen(TExamenID: string, createtipoexamenDTO: CreatetipoexamenDTO): Promise<Texamen>;
}
