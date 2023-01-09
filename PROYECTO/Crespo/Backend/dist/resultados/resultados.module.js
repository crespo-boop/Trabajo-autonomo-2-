"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadosModule = void 0;
const common_1 = require("@nestjs/common");
const resultados_controller_1 = require("./resultados.controller");
const resultados_service_1 = require("./resultados.service");
const mongoose_1 = require("@nestjs/mongoose");
const resultados_schema_1 = require("./schemas/resultados.schema");
let ResultadosModule = class ResultadosModule {
};
ResultadosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Resultado', schema: resultados_schema_1.resultadoschema }]),
        ],
        controllers: [resultados_controller_1.ResultadosController],
        providers: [resultados_service_1.ResultadosService],
    })
], ResultadosModule);
exports.ResultadosModule = ResultadosModule;
//# sourceMappingURL=resultados.module.js.map