import { HttpCode, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { resgistar_usuario_dto } from './resgistrar_usuario.dto';
import { usuario_login_dto } from './usuario_login.dto';
import { compare } from 'bcrypt';
import { validateHeaderName } from 'http';


@Injectable()
export class UsuarioServiceService {
    constructor (@InjectRepository(Usuario) private repositorio_usuario: 
    Repository<Usuario>){}

    probando():string{
        return "probando usuario";
    }

    crear_usuario(usuario: resgistar_usuario_dto){
        const usuario_nuevo = this.repositorio_usuario.create(usuario)
        return this.repositorio_usuario.save(usuario_nuevo)
    }

    listar_usuarios(){
        return this.repositorio_usuario.find()
    }

    async encontrar_usuario(usuario_logueandose: usuario_login_dto) {
        const {correo_usuario, contrasenia_usuario} = usuario_logueandose
        const consulta = await this.repositorio_usuario.findOne({
            where:{
                correo_usuario
            }
        })
        if(!consulta) throw new HttpException('USER_NOT_FOUND', 404);
        const validacion = await compare(contrasenia_usuario, consulta.contrasenia_usuario);
        if (!validacion) throw new HttpException('FORBIDDEN', 403);
        return consulta
      }
}
