import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nota } from '../nota/nota.entity';
import { NotaService } from '../nota/nota.service';
import { UsuarioNotaController } from './usuario_nota.controller';
import { Relacion_Usuario_Nota } from './usuario_nota.entity';
import { UsuarioNotaService } from './usuario_nota.service';

@Module({
  imports: [TypeOrmModule.forFeature([Relacion_Usuario_Nota, Nota])],
  controllers: [UsuarioNotaController],
  providers: [UsuarioNotaService, NotaService]
})
export class UsuarioNotaModule {}
