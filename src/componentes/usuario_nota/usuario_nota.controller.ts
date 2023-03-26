import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { NotaService } from '../nota/nota.service';
import { anadir_usuario_dto } from './anadir_usuario.dto';
import { UsuarioNotaService } from './usuario_nota.service';
@Controller('usuario-nota')
export class UsuarioNotaController {

    constructor(private run_service:UsuarioNotaService, private notaService:NotaService){}

    @Post()
    async anadir_colaborador(@Body() nueva_nota: anadir_usuario_dto){
        await this.run_service.anadir_usuario(nueva_nota);
    }

    @Get()
    listar_colaboraciones(){
        return this.run_service.listar_colaboraciones();
    }

    @Delete(':id')
    eliminar_nota(@Param ('id', ParseIntPipe) id:number){
        return this.run_service.eliminar_relacion(id)
    }

    @Patch(':id')
    actualizar_permisos(@Param('id', ParseIntPipe) id:number, @Body() nota:anadir_usuario_dto){
        return this.run_service.actualizar_permisos(id, nota)
    }

    @Get(':id')
    obtener_notas_usuario_colaborador(@Param('id', ParseIntPipe) id:number){
        return this.run_service.obtener_notas_usuario_colaborador(id)
    }

    @Get('notas_propietario_colaborador/:id_usuario')
    async obtener_notas_usuario_propietario_colaborador(@Param('id_usuario', ParseIntPipe)id:number){
        //obtener notas donde el usuario es propietario
        const notas_propietario = await this.notaService.obtener_notas_usuario_propietario(id);
        
        //obtener notas donde el usuario es colaborador
        const notas_colaborador = await this.run_service.obtener_notas_usuario_colaborador(id);

        const notas_comunes = [... notas_propietario, ... notas_colaborador];

        return notas_comunes;
    }
}
