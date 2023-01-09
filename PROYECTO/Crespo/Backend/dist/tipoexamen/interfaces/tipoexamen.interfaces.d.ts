import { Document } from 'mongoose';
export interface Texamen extends Document {
    readonly Descripcion: string;
    readonly Indicaciones: string;
}
