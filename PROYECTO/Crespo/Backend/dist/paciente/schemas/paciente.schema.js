"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pacienteschema = void 0;
const mongoose_1 = require("mongoose");
exports.pacienteschema = new mongoose_1.Schema({
    Nombre: { type: String, require: true },
    Tsangre: { type: String, require: true },
    Identificacion: { type: String, require: true },
});
//# sourceMappingURL=paciente.schema.js.map