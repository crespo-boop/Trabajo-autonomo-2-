"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ResultadosService = class ResultadosService {
    constructor(ResultadoModule) {
        this.ResultadoModule = ResultadoModule;
    }
    async getResultados() {
        const Resultadox = await this.ResultadoModule.find();
        return Resultadox;
    }
    async getResultado(ResultadoID) {
        const Resultadox = await this.ResultadoModule.findById(ResultadoID);
        return Resultadox;
    }
    async createResultados(createresultadoDTO) {
        const Resultadox = new this.ResultadoModule(createresultadoDTO);
        return await Resultadox.save();
    }
    async deleteResultados(ResultadoID) {
        const deleteresultadox = await this.ResultadoModule.findByIdAndDelete(ResultadoID);
        return deleteresultadox;
    }
    async updateResultados(ResultadoID, createresultadoDTO) {
        const updateresultadox = await this.ResultadoModule.findByIdAndUpdate(ResultadoID, createresultadoDTO, { new: true });
        return updateresultadox;
    }
};
ResultadosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Resultado')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ResultadosService);
exports.ResultadosService = ResultadosService;
//# sourceMappingURL=resultados.service.js.map