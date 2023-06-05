import Jatekter from "./Jatekter.js";
import Statisztika from "./Statisztika.js";

class Csatorna{
    #Jatekter
    #Statisztika

    constructor(){
        
        this.#Statisztika = new Statisztika();
        this.jatek()
    }

    jatek(){
        this.#Jatekter= new Jatekter()
        this.#Jatekter.valasz().then(adat => {
            this.#Statisztika.ujAdat(adat.ki,adat.gepLepesei)
            setTimeout(() => {
                this.#Jatekter.destructor()
                this.jatek()
            }, 2000);
        })
    }
}

export default Csatorna