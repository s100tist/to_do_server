export class Crear_nota_dto{
    id_propietario_nota:    number;
    compartida_nota?:        boolean;
    titulo_nota:            string;
    contenido_nota:         string;
    id_categoria_nota:      number;
    prioridad_nota?:         number;  
    color_nota:             string; 
    fecha_creacion_nota:    Date;
    fecha_termino_nota:     Date;
    finalizado_nota?:        boolean;
}