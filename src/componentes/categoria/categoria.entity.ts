import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity({name:'categorias'})
export class Categoria{
    @PrimaryGeneratedColumn()
    id_categoria: number;

    @Column()
    nombre_categoria: string;
}
