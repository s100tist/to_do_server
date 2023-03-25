import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { anadir_usuario_dto } from './anadir_usuario.dto';
import { UsuarioNotaService } from './usuario_nota.service';
@Controller('usuario-nota')
export class UsuarioNotaController {

    constructor(private run_service:UsuarioNotaService){}

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
}
