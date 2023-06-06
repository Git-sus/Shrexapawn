import Jatekter from "./Jatekter.js";
import Statisztika from "./Statisztika.js";

class Csatorna{
    #jatekter
    #statisztika

    constructor(){
        
        this.#statisztika = new Statisztika();
        this.jatek()
    }

    jatek(){
        this.#jatekter= new Jatekter()
        this.#jatekter.valasz().then(adat => {
            this.#statisztika.ujAdat(adat.ki,adat.gepLepesei)
            setTimeout(() => {
                this.#jatekter.destructor()
                this.jatek()
            }, 2000);
        })
    }
}

export default Csatorna