import { Document } from 'mongoose';
export interface Paciente extends Document {
    readonly Nombre: string;
    readonly Tsangre: string;
    readonly Identificacion: string;
}
