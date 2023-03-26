import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { resgistar_usuario_dto } from './resgistrar_usuario.dto';
import { UsuarioServiceService } from './usuario.service';
import * as bcrypt from 'bcrypt';
import { usuario_login_dto } from './usuario_login.dto';
import { Usuario } from './usuario.entity';



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

    @Post('login')
    iniciar_sesion(@Body() usuario: usuario_login_dto){
        return this.servicio_usuario.encontrar_usuario(usuario)
    }
    
}
