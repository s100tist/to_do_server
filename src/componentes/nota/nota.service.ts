import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nota } from './nota.entity';
import { Crear_nota_dto} from './crear_nota.dto'
import { Actualizar_nota_dto } from './actualizar_nota.dto';

@Injectable()
export class NotaService {
    
    constructor(@InjectRepository(Nota) private notaRepository:Repository<Nota>){}

    crear_nota(nota: Crear_nota_dto){
        const nueva_nota =this.notaRepository.create(nota)
        return this.notaRepository.save(nueva_nota)
    }

    listar_notas(){
        return this.notaRepository.find()
    }

    eliminar_nota(id_nota:number){
        return this.notaRepository.delete({id_nota})
    }

    actualizar_nota(id_nota:number, nota:Actualizar_nota_dto){
        return this.notaRepository.update({id_nota}, nota)
    }

    obtener_notas_por_categoria(id_categoria_nota:number){
        return this.notaRepository.find({where:{id_categoria_nota} })
    }

    obtener_notas_de_propietarios(id_propietario_nota:number){
        return this.notaRepository.find({where:{id_propietario_nota} })
    }

    obtener_notas_usuario_propietario(id_propietario_nota:number){
        return this.notaRepository.createQueryBuilder("notas")
        .select("*").where("notas.id_propietario_nota = :id_propietario_nota").setParameters({id_propietario_nota:id_propietario_nota})
        .printSql()
        .getRawMany()
    }

    obtener_notas_usuario_categoria(id_propietario_nota: number,id_categoria_nota: number){
        return this.notaRepository.createQueryBuilder("notas")
        .select("*").where("notas.id_propietario_nota = :id_propietario_nota and notas.id_categoria_nota = :id_categoria_nota").setParameters({id_propietario_nota:id_propietario_nota, id_categoria_nota:id_categoria_nota})
        .printSql()
        .getRawMany()
    }

    obtener_notas_usuario_compartidas(id_propietario_nota: number,boolean: number){
        return this.notaRepository.createQueryBuilder("notas")
        .select("*").where("notas.id_propietario_nota = :id_propietario_nota and notas.compartida_nota = :compartida_nota")
        .setParameters({id_propietario_nota:id_propietario_nota, compartida_nota:boolean})
        .printSql()
        .getRawMany()
    }

    obtener_notas_usuario_finalizado(id_propietario_nota: number,boolean: number){
        return this.notaRepository.createQueryBuilder("notas")
        .select("*").where("notas.id_propietario_nota = :id_propietario_nota and notas.finalizado_nota = :finalizado_nota")
        .setParameters({id_propietario_nota:id_propietario_nota, finalizado_nota:boolean})
        .printSql()
        .getRawMany()
    }

}
