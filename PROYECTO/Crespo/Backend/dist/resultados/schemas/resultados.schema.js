"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultadoschema = void 0;
const mongoose_1 = require("mongoose");
exports.resultadoschema = new mongoose_1.Schema({
    idPacienete: { type: String, require: true },
    idTipoExamen: { type: String, require: true },
    ResultadoExamen: { type: String, require: true },
    ValorPagado: { type: String, require: true },
    Observaciones: { type: String, require: true },
});
//# sourceMappingURL=resultados.schema.js.map