import { Controller, Post, Body, Get } from '@nestjs/common';
import { resgistar_usuario_dto } from './resgistrar_usuario.dto';
import { UsuarioServiceService } from './usuario.service';
import * as bcrypt from 'bcrypt';



@Controller('usuario-controller')
export class UsuarioControllerController {
    constructor(private servicio_usuario: UsuarioServiceService){}
    @Post()
    async registrar_usuario(@Body() usuario_nuevo: resgistar_usuario_dto){
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(usuario_nuevo.contrasenia_usuario, saltOrRounds);
        usuario_nuevo.contrasenia_usuario = hash;
        await this.servicio_usuario.crear_usuario(usuario_nuevo);
    }

    @Get()
    async obtener_usuarios(){
        return this.servicio_usuario.listar_usuarios();
    }
}
