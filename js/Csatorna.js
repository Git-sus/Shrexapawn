import Jatekter from "./Jatekter.js";
import Statisztika from "./Statisztika.js";

class Csatorna{
    #jatekter
    #statisztika

    constructor(){
        this.#info()
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

    #info(){
        $("sup").eq(0).on("click",()=>{
            $("#info").fadeTo(1000, 1, function(){
                $(this).show() 
            }); 
        })
        $("#X").on("click",()=>{
            $("#info").fadeTo(1000, 0, function(){
                $(this).hide() 
            }); 
        })
    }
}

export default Csatorna