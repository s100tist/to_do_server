import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Relacion_Usuario_Nota } from './usuario_nota.entity';
import { anadir_usuario_dto } from './anadir_usuario.dto';

@Injectable()
export class UsuarioNotaService {
    constructor(@InjectRepository(Relacion_Usuario_Nota) private notaRepository:Repository<Relacion_Usuario_Nota>){}


    anadir_usuario(datos: anadir_usuario_dto){
        const nueva_nota =this.notaRepository.create(datos)
        return this.notaRepository.save(nueva_nota)
    }

    listar_colaboraciones(){
        return this.notaRepository.find()
    }

    eliminar_relacion(id_nota:number){
        return this.notaRepository.delete({id_nota})
    }

    actualizar_permisos(id_nota:number, nota:anadir_usuario_dto){
        return this.notaRepository.update({id_nota}, nota)
    }

}
