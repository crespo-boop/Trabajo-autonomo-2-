import { Schema } from 'mongoose';

export const pacienteschema = new Schema({
  Nombre: { type: String, require: true },

  Tsangre: { type: String, require: true },

  Identificacion: { type: String, require: true },
});
