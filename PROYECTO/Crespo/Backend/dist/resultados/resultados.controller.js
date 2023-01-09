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
exports.ResultadosController = void 0;
const common_1 = require("@nestjs/common");
const create_resultados_dto_1 = require("./dto/create-resultados.dto");
const resultados_service_1 = require("./resultados.service");
const swagger_1 = require("@nestjs/swagger");
let ResultadosController = class ResultadosController {
    constructor(resultadosService) {
        this.resultadosService = resultadosService;
    }
    async createPost(res, createresultadoDTO) {
        const Resultadox = await this.resultadosService.createResultados(createresultadoDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Resultado recibido',
            Resultadox: Resultadox,
        });
    }
    async getPacientes(res) {
        const Resultadox = await this.resultadosService.getResultados();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Aqui esta el listado de resultados',
            Resultadox,
        });
    }
    async getPaciente(res, ResultadoID) {
        const Resultadox = await this.resultadosService.getResultado(ResultadoID);
        if (!Resultadox)
            throw new common_1.NotFoundException('Resultado no encontrado no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Aqui esta el resultado que solicito',
            Resultadox,
        });
    }
    async updatePaciente(res, createresultadoDTO, ResultadoID) {
        const Resultadox = await this.resultadosService.updateResultados(ResultadoID, createresultadoDTO);
        if (!Resultadox)
            throw new common_1.NotFoundException('resultado no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'resultado modificado correctamente',
            Resultadox,
        });
    }
    async deletePaciente(res, ResultadoID) {
        const Resultadox = await this.resultadosService.deleteResultados(ResultadoID);
        if (!Resultadox)
            throw new common_1.NotFoundException('resultado no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'resultado eliminado',
            Resultadox,
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Creacion del modelo de datos Resultados',
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_resultados_dto_1.CreateResultadoDTO]),
    __metadata("design:returntype", Promise)
], ResultadosController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/list'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Busqueda de los datos en DB' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elementos no encontrados' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ResultadosController.prototype, "getPacientes", null);
__decorate([
    (0, common_1.Get)('/:ResultadoID'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Busqueda de los datos por id en DB',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elementos no encontrados' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('ResultadoID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ResultadosController.prototype, "getPaciente", null);
__decorate([
    (0, common_1.Put)('/update'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Actualizacion completada' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no actualizado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('ResultadoID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_resultados_dto_1.CreateResultadoDTO, Object]),
    __metadata("design:returntype", Promise)
], ResultadosController.prototype, "updatePaciente", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Eliminacion completada' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no Eliminado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('ResultadoID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ResultadosController.prototype, "deletePaciente", null);
ResultadosController = __decorate([
    (0, swagger_1.ApiTags)('Resultados Schema'),
    (0, common_1.Controller)('resultados'),
    __metadata("design:paramtypes", [resultados_service_1.ResultadosService])
], ResultadosController);
exports.ResultadosController = ResultadosController;
//# sourceMappingURL=resultados.controller.js.map