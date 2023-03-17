import { Controller, Post, Body, Get, Param, BadRequestException, Res } from '@nestjs/common';
import { resgistar_usuario_dto } from './resgistrar_usuario.dto';
import { UsuarioServiceService } from './usuario.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller('usuario-controller')
export class UsuarioControllerController {
    constructor(private servicio_usuario: UsuarioServiceService, private servicio_jwt: JwtService){}
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

    @Post()
    async inicio_sesion(@Body() contrasenia_usuario: string, @Body() correo_usuario: string, @Res() response:Response){
        const usuario = await this.servicio_usuario.logueo_usuario({correo_usuario});

        if(!usuario){
            throw new BadRequestException('credenciales invalidas');
        }
        if(await bcrypt.compare(contrasenia_usuario, usuario.contrasenia_usuario)){
            throw new BadRequestException('credenciales invalidas');
        }
        const jwt = await this.servicio_jwt.signAsync({id_usuario:usuario.id_usuario})

        // response.cookie('jwt',jwt);
        return(jwt);
    }
}
