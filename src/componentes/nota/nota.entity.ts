import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity({name:'notas'})
export class Notas{
    @PrimaryGeneratedColumn()
    id_nota: number;

    @Column({nullable:false})
    nombre_usuario: string;
    
    @Column({nullable:false})
    contrasenia_usuario: string;
    
    @Column({unique:true, nullable:false})
    correo_usuario: string;
}
