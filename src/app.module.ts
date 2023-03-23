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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'esme',
      password:'Pme.2509',
      database:'to_do_db',
      entities:[Usuario, Nota, Categoria], 
      synchronize:true
    }),
    UsuarioModule,
    JwtModule.register({
      secret:'secreto',
      signOptions: { expiresIn: '60s' },
    }),
    NotaModule,
    CategoriaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
