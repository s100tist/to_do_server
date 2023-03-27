import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../usuario/usuario.entity";
@Entity({name:'relacion_nota_usuario'})
export class Relacion_Usuario_Nota{

    @PrimaryGeneratedColumn()
    id_relacion: number;
    //la llave primaria es obligatoria al usar entidades, trabajar esquivando esa limitante genera muchos bugs; ignorar llave primaria
    //https://stackoverflow.com/a/3996833


    // @OneToMany(() => Usuario, Usuario => )
    @Column()
    id_nota: number;

    @Column()
    id_colaborador: number;
    
    @Column({
        type: "enum",
        enum:["Ver y editar", "Editar","Ver"],
        default: "Ver"
    }
    )
    permisos: number
}
