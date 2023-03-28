import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './componentes/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './componentes/usuario/usuario.entity';
import { JwtModule } from '@nestjs/jwt';
import { NotaModule } from './componentes/nota/nota.module';
import { Nota } from './componentes/nota/nota.entity';
import { CategoriaModule } from './componentes/categoria/categoria.module';
import { Categoria } from './componentes/categoria/categoria.entity';
import { Relacion_Usuario_Nota } from './componentes/usuario_nota/usuario_nota.entity';
import { UsuarioNotaModule } from './componentes/usuario_nota/usuario_nota.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'to_do_db',
      entities:[Usuario, Nota, Categoria, Relacion_Usuario_Nota], 
      synchronize:true
    }),
    UsuarioModule,
    JwtModule.register({
      secret:'secreto',
      signOptions: { expiresIn: '60s' },
    }),
    NotaModule,
    CategoriaModule,
    UsuarioNotaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
