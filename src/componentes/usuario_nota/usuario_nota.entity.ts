import { Entity, Column, OneToMany } from "typeorm";
import { Usuario } from "../usuario/usuario.entity";
@Entity({name:'usuario_nota'})
export class Nota{
    // @OneToMany(() => Usuario, Usuario => )
    id_nota: number;

    @Column()
    id_propietario_nota: number;
    
    @Column()
    permisos: number
}
