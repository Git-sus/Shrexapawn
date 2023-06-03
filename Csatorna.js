import Jatekter from "./Jatekter.js";
import Statisztika from "./Statisztika.js";

class Csatorna{
    #Jatekter
    #Statisztika

    constructor(){
        this.#Jatekter= new Jatekter()
        this.#Statisztika = new Statisztika();

        // fetch(this.#Jatekter)
        // .then((response) => console.log(response))
        this.#Jatekter.valasz().then(resolve => console.log("async ",resolve))
    }
}

export default Csatorna