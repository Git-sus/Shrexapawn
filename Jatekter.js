import { Mezo } from "/Mezo.js";

export class Jatekter{
    #a=null
    constructor(){    
        for (let ix = 0; ix < 9; ix++) {
            new Mezo("main",ix)        
        }
        
        $(window).on("elemValaszt",event =>{
            if(this.#a===null)
                this.#a=event.detail
            else{
                if(this.#a.LegalisLepes(event.detail) || this.#a.LegalisTamadas(event.detail)){
                    this.#a.csere(event.detail)
                }
                this.#a=null
            }
        })  
        
    }
}