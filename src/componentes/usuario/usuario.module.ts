import { Module } from '@nestjs/common';
import { UsuarioServiceService } from './usuario.service'
import { UsuarioControllerController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Usuario])],
  providers: [UsuarioServiceService],
  controllers: [UsuarioControllerController]
})
export class UsuarioModule {}
