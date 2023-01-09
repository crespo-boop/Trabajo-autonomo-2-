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
exports.TipoExamenController = void 0;
const common_1 = require("@nestjs/common");
const create_tipoexamen_dto_1 = require("./dto/create-tipoexamen.dto");
const tipoexamen_service_1 = require("./tipoexamen.service");
const swagger_1 = require("@nestjs/swagger");
let TipoExamenController = class TipoExamenController {
    constructor(tipoExamenService) {
        this.tipoExamenService = tipoExamenService;
    }
    async createPost(res, createtipoexamenDTO) {
        const Texamenex = await this.tipoExamenService.createTipoexamen(createtipoexamenDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'tipo de examen recibido',
            Texamenex: Texamenex,
        });
    }
    async getTipoexamenes(res) {
        const TExamenex = await this.tipoExamenService.getTipoexamenes();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Aqui esta el listado de los tipo de examenes',
            TExamenex,
        });
    }
    async getTipoexamen(res, TExamenID) {
        const TExamenex = await this.tipoExamenService.getTipoexamen(TExamenID);
        if (!TExamenex)
            throw new common_1.NotFoundException('Examen no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Aqui esta las expecificaciones del examen que solicito',
            TExamenex,
        });
    }
    async updatePaciente(res, createtipoexamenDTO, TExamenID) {
        const TExamenex = await this.tipoExamenService.updateTipoexamen(TExamenID, createtipoexamenDTO);
        if (!TExamenex)
            throw new common_1.NotFoundException('Examen no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'tipo de examen modificado correctamente',
            TExamenex,
        });
    }
    async deletePaciente(res, TExamenID) {
        const TExamenex = await this.tipoExamenService.deleteTipoexamen(TExamenID);
        if (!TExamenex)
            throw new common_1.NotFoundException('Examen no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'tipo de examen eliminado',
            TExamenex,
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Creacion del modelo de datos Tipo Examen',
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_tipoexamen_dto_1.CreatetipoexamenDTO]),
    __metadata("design:returntype", Promise)
], TipoExamenController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/list'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Busqueda de los datos en DB' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elementos no encontrados' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TipoExamenController.prototype, "getTipoexamenes", null);
__decorate([
    (0, common_1.Get)('/:TExamenID'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Busqueda de los datos por id en DB',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elementos no encontrados' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('TExamenID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TipoExamenController.prototype, "getTipoexamen", null);
__decorate([
    (0, common_1.Put)('/update'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Actualizacion completada' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no actualizado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('TExamenID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_tipoexamen_dto_1.CreatetipoexamenDTO, Object]),
    __metadata("design:returntype", Promise)
], TipoExamenController.prototype, "updatePaciente", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Eliminacion completada' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no Eliminado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('TExamenID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TipoExamenController.prototype, "deletePaciente", null);
TipoExamenController = __decorate([
    (0, swagger_1.ApiTags)('Tipo Examen Schema'),
    (0, common_1.Controller)('tipoexamen'),
    __metadata("design:paramtypes", [tipoexamen_service_1.TipoExamenService])
], TipoExamenController);
exports.TipoExamenController = TipoExamenController;
//# sourceMappingURL=tipoexamen.controller.js.map