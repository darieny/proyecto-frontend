export class Reserva {

    id:number;
    claseVuelo:string;
    asiento:string;
    fk_Id_Pasajero:{ 
        id: number;}; 
    fk_Id_Vuelo:{ 
        id: number;};
}
