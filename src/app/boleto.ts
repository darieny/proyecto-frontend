export class Boleto {
    id:number;
    fechaEmision:Date;
    fechaValidacion:Date;
    precioBoleto:number;
    horaPrechequeo:string;
    fk_Id_Reserva:{
        id:number;};
}
