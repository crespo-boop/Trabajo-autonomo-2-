import { Model } from 'mongoose';
import { Resultado } from './interfaces/resultados.interface';
import { CreateResultadoDTO } from './dto/create-resultados.dto';
export declare class ResultadosService {
    private readonly ResultadoModule;
    constructor(ResultadoModule: Model<Resultado>);
    getResultados(): Promise<Resultado[]>;
    getResultado(ResultadoID: string): Promise<Resultado>;
    createResultados(createresultadoDTO: CreateResultadoDTO): Promise<Resultado>;
    deleteResultados(ResultadoID: string): Promise<Resultado>;
    updateResultados(ResultadoID: string, createresultadoDTO: CreateResultadoDTO): Promise<Resultado>;
}
