import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { resgistar_usuario_dto } from './resgistrar_usuario.dto';

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
}
