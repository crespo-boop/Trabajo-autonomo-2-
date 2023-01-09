"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.texamenschema = void 0;
const mongoose_1 = require("mongoose");
exports.texamenschema = new mongoose_1.Schema({
    Descripcion: { type: String, require: true },
    Indicaciones: { type: String, require: true },
});
//# sourceMappingURL=tipoexamen.schema.js.map