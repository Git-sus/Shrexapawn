import Jatekter from "./Jatekter.js";
import Statisztika from "./Statisztika.js";

class Csatorna{
    #Jatekter
    #Statisztika

    constructor(){
        this.#Jatekter= new Jatekter()
        this.#Statisztika = new Statisztika();

        this.#Statisztika.asyncCall(this.#Jatekter.valasz)
    }
}

export default Csatorna