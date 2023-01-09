import { Schema } from 'mongoose';

export const resultadoschema = new Schema({
  idPacienete: { type: String, require: true },

  idTipoExamen: { type: String, require: true },

  ResultadoExamen: { type: String, require: true },

  ValorPagado: { type: String, require: true },

  Observaciones: { type: String, require: true },
});
