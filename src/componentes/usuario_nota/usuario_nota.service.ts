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

    obtener_notas_usuario_colaborador(id_usuario:number){
        return this.notaRepository.createQueryBuilder("relacion_nota_usuario")
        .select("notas.*, usuarios.nombre_usuario, usuarios.correo_usuario")
        .innerJoin('notas', 'notas', 'notas.id_nota = relacion_nota_usuario.id_nota')
        .innerJoin('usuarios','usuarios','usuarios.id_usuario = relacion_nota_usuario.id_colaborador')
        .where('relacion_nota_usuario.id_colaborador = :id_usuario', { id_usuario })
        .getRawMany();
    }

}
