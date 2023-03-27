import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Actualizar_nota_dto } from './actualizar_nota.dto';
import { Crear_nota_dto } from './crear_nota.dto';
import { NotaService } from './nota.service';

@Controller('nota')
export class NotaController {

    constructor(private notaServices:NotaService){}
    
    @Post()
    async crear_nota(@Body() nueva_nota: Crear_nota_dto){
        await this.notaServices.crear_nota(nueva_nota);
    }

    @Get()
    listar_notas(){
        return this.notaServices.listar_notas();
    }

    @Delete(':id')
    eliminar_nota(@Param ('id', ParseIntPipe) id:number){
        return this.notaServices.eliminar_nota(id)
    }

    @Patch(':id')
    actualizar_nota(@Param('id', ParseIntPipe) id:number, @Body() nota:Actualizar_nota_dto){
        return this.notaServices.actualizar_nota(id, nota)
    }
    
    @Get('todas_por_categoria/:id')
    obtener_notas_por_id(@Param('id',ParseIntPipe)id:number){
        return this.notaServices.obtener_notas_por_categoria(id)
    }
    
    @Get('usuario_propietario/:id_usuario')
    obtener_notas_usuario(@Param('id_usuario',ParseIntPipe)id:number){
        return this.notaServices.obtener_notas_usuario_propietario(id)
    }


    @Get('categoria/:id_usuario/:id_categoria')
    obtener_notas_usuario_categoria(
        @Param('id_usuario',ParseIntPipe)id_usuario:number,
        @Param('id_categoria',ParseIntPipe)id_categoria:number){
        return this.notaServices.obtener_notas_usuario_categoria(id_usuario,id_categoria)
    }




    @Get('compartidas/:id_usuario/:boolean')
    obtener_notas_usuario_compartidas(
        @Param('id_usuario',ParseIntPipe)id_usuario:number,
        @Param('boolean',ParseIntPipe)boolean:number){
        return this.notaServices.obtener_notas_usuario_compartidas(id_usuario,boolean)
    }

    @Get('finalizadas/:id_usuario/:boolean')
    obtener_notas_usuario_finalizado(
        @Param('id_usuario',ParseIntPipe)id_usuario:number,
        @Param('boolean',ParseIntPipe)boolean:number){
        return this.notaServices.obtener_notas_usuario_finalizado(id_usuario,boolean)
    }
    
}
