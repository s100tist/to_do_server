import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Crear_categoria_dto } from './crear_categoria.dto';

@Controller('categoria')
export class CategoriaController {
    constructor(private categoriaServices:CategoriaService){}

    @Post()
    async crear_categoria(@Body() nueva_categoria:Crear_categoria_dto){
        await this.categoriaServices.crear_categoria(nueva_categoria);
    }

    @Get()
    listar_categoria(){
        return this.categoriaServices.listar_categoria();
    }

    @Delete(':id')
    eliminar_categoria(@Param ('id', ParseIntPipe) id:number){
        return this.categoriaServices.eliminar_categoria(id)
    }

    @Patch(':id')
    actualizar_categoria(@Param('id', ParseIntPipe) id:number, @Body() categoria:Crear_categoria_dto){
        return this.categoriaServices.actualizar_categoria(id, categoria)
    }
}
