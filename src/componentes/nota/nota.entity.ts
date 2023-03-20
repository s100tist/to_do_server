import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity({name:'notas'})
export class Nota{
    @PrimaryGeneratedColumn()
    id_nota: number;

    @Column()
    id_propietario_nota: number;
    
    @Column()
    compartida_nota: boolean;
    
    @Column()
    titulo_nota: string;

    @Column()
    contenido_nota: string;

    @Column()
    id_categoria_nota: number;
    
    @Column()
    prioridad_nota: number;  // 0 ninguna, 1 baja, 2 media, 3 alta
    
    @Column()
    color_nota: string;  // Hexa
    
    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    fecha_creacion_nota: Date;

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    fecha_termino_nota: Date;

    @Column()
    finalizado_nota: boolean;
}
