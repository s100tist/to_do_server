import { Module } from '@nestjs/common';
import { UsuarioServiceService } from './usuario_service/usuario_service.service';
import { UsuarioControllerController } from './usuario_controller.controller';
import { UsuarioServiceService } from './usuario_service.service';
import { UsuarioControllerController } from './usuario_controller/usuario_controller.controller';
import { UsuarioServiceService } from './usuario_service/usuario_service.service';

@Module({
  providers: [UsuarioServiceService],
  controllers: [UsuarioControllerController]
})
export class UsuarioModule {}
