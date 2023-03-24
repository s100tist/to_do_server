import { Module } from '@nestjs/common';
import { UsuarioNotaController } from './usuario_nota.controller';
import { UsuarioNotaService } from './usuario_nota.service';

@Module({
  controllers: [UsuarioNotaController],
  providers: [UsuarioNotaService]
})
export class UsuarioNotaModule {}
