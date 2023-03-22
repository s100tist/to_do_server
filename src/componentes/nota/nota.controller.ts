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

}
