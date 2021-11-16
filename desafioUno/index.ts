 
interface Auto{
    encender : boolean;
    velocidadMaxima: number;
    acelerar():void;
  }
  
  const conducirBatimovil = ( auto ):void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
  }
  
  const ferrari:Auto = {
    encender:false,
    velocidadMaxima:0,
    acelerar(){
      console.log("...... gogogo!!!");
    }
  }
  
   
  interface Hombre{
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
  }
  
  const hombre:Hombre = {
    reir: true,
    comer:true,
    llorar:false
  }
  
  const reir = ( hombre:Hombre ):void => {
    if( hombre.reir ){
      console.log("JAJAJAJA");
    }
  }
  
  
   
  interface CiudadFn{
    (ciudadanosL: string[]):number
  }
  
  const ciudad:CiudadFn = ( ciudadanos:string[] ):number => {
    return ciudadanos.length;
  }
  
  interface PersonaInterface{
    nombre:string;
    edad: number;
    sexo: string;
    estadoCivil:string;
    imprimirBio():void;
  }
  
   
  class Persona implements PersonaInterface {
  
    edad:number;
    estadoCivil: string;
    nombre:string;
    sexo:string;
    
    imprimirBio(){
  
    }
  }