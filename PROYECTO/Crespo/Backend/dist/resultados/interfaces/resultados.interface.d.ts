import { Document } from 'mongoose';
export interface Resultado extends Document {
    readonly idPacienete: string;
    readonly idTipoExamen: string;
    readonly ResultadoExamen: string;
    readonly ValorPagado: string;
    readonly Observaciones: string;
}
