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
        this.notaRepository.update({id_nota}, nota)
    }
}
