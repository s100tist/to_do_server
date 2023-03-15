//import {Entity, Column, PrimaryGeneratedColumn} from typeORM
//@entity({name: usuario})
export class usuario{
    //@PrimaryGeneratedColumn()
    id_usuario: number;
    //@Column()
    nombre_usuario: string;
    //@Column()
    contrasenia_usuario: string;
    //@Column(unique:true)
    correo_usuario: string;
}
