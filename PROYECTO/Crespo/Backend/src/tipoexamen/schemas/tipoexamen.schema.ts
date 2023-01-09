import { Schema } from 'mongoose';

export const texamenschema = new Schema({
  Descripcion: { type: String, require: true },

  Indicaciones: { type: String, require: true },
});
