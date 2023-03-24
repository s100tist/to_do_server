import { Entity, Column, OneToMany } from "typeorm";
import { Usuario } from "../usuario/usuario.entity";
@Entity({name:'relacion_nota_usuario'})
export class Nota{
    // @OneToMany(() => Usuario, Usuario => )
    id_nota: number;

    @Column()
    id_propietario_nota: number;
    
    @Column({
        type: "enum",
        enum:["Ver y editar", "Editar","Ver"],
        default: "Ver"
    }
    )
    permisos: number
}
