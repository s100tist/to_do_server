import { Module } from '@nestjs/common';
import { UsuarioServiceService } from './usuario_service.service'
import { UsuarioControllerController } from './usuario_controller.controller';

@Module({
  providers: [UsuarioServiceService],
  controllers: [UsuarioControllerController]
})
export class UsuarioModule {}
