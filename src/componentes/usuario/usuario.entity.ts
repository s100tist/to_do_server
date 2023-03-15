import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity({name:'usuarios'})
export class Usuario{
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({nullable:false})
    nombre_usuario: string;
    
    @Column({nullable:false})
    contrasenia_usuario: string;
    
    @Column({unique:true, nullable:true})
    correo_usuario: string;
}
