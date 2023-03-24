import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';
import { Crear_categoria_dto } from './crear_categoria.dto';

@Injectable()
export class CategoriaService {
    constructor(@InjectRepository(Categoria) private categoriaRepository:Repository<Categoria>){}

    crear_categoria(categoria: Crear_categoria_dto){
        const nueva_categoria = this.categoriaRepository.create(categoria)
        return this.categoriaRepository.save(nueva_categoria)
    }

    listar_categoria(){
        return this.categoriaRepository.find()
    }

    eliminar_categoria(id_categoria:number){
        return this.categoriaRepository.delete({id_categoria})
    }

    actualizar_categoria(id_categoria:number, categoria:Crear_categoria_dto){
        this.categoriaRepository.update({id_categoria},categoria)
    }
}
