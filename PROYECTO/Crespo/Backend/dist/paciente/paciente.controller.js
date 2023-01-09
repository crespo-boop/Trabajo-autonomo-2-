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
exports.PacienteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_paciente_dto_1 = require("./dto/create-paciente.dto");
const paciente_service_1 = require("./paciente.service");
let PacienteController = class PacienteController {
    constructor(pacienteService) {
        this.pacienteService = pacienteService;
    }
    async createPost(res, createpacienteDTO) {
        const Pacientex = await this.pacienteService.createPacientes(createpacienteDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Paciente recibido',
            Pacientex: Pacientex,
        });
    }
    async getPacientes(res) {
        const Pacientex = await this.pacienteService.getPacientes();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Aqui esta el listado de pacientes',
            Pacientex,
        });
    }
    async getPaciente(res, PacienteID) {
        const Pacientex = await this.pacienteService.getPaciente(PacienteID);
        if (!Pacientex)
            throw new common_1.NotFoundException('Paciente no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Aqui esta el paciente que solicito',
            Pacientex,
        });
    }
    async updatePaciente(res, createpacienteDTO, PacienteID) {
        const Pacientex = await this.pacienteService.updatePacientes(PacienteID, createpacienteDTO);
        if (!Pacientex)
            throw new common_1.NotFoundException('Paciente no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Paciente modificado correctamente',
            Pacientex,
        });
    }
    async deletePaciente(res, PacienteID) {
        const Pacientex = await this.pacienteService.deletePacientes(PacienteID);
        if (!Pacientex)
            throw new common_1.NotFoundException('Paciente no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Paciente eliminado',
            Pacientex,
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Creacion del modelo de datos Paciente',
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_paciente_dto_1.CreatepacienteDTO]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/list'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Busqueda de los datos en DB' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elementos no encontrados' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "getPacientes", null);
__decorate([
    (0, common_1.Get)('/:PacienteID'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Busqueda de los datos por id en DB',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elementos no encontrados' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('PacienteID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "getPaciente", null);
__decorate([
    (0, common_1.Put)('/update'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Actualizacion completada' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no actualizado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('PacienteID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_paciente_dto_1.CreatepacienteDTO, Object]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "updatePaciente", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Eliminacion completada' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Elemento no Eliminado' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('PacienteID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "deletePaciente", null);
PacienteController = __decorate([
    (0, swagger_1.ApiTags)('Paciente Schema'),
    (0, common_1.Controller)('paciente'),
    __metadata("design:paramtypes", [paciente_service_1.PacienteService])
], PacienteController);
exports.PacienteController = PacienteController;
//# sourceMappingURL=paciente.controller.js.map