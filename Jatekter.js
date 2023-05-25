import { Mezo } from "/Mezo.js";

export class Jatekter{
    #mezoLista=[]
    #kor
    #kattintottMezo=null
    constructor(){    
        this.#kor=1
        for (let ix = 0; ix < 9; ix++) {
            this.#mezoLista.push(new Mezo("main",ix))  
        }
        this.jatekosLep()
    }

    mezoListaToString() {
        let tmp=""
        this.#mezoLista.forEach(element => {
            tmp+=element.babu
        })
        return tmp
    }

    jatekosLep(){
        $(window).on("elemValaszt",event =>{
            console.log(this.ellenorzes(1));
            console.log(this.mezoListaToString());
            if(this.#kor%2){
                if(this.#kattintottMezo===null)
                    this.#kattintottMezo=event.detail
                else{
                    if(this.#kattintottMezo.LegalisLepes(event.detail) || this.#kattintottMezo.LegalisTamadas(event.detail)){
                        this.#kattintottMezo.csere(event.detail)
                        this.#kor++
                        if(this.ellenorzes(1))
                            this.gepLep()
                        else{
                            console.log("nyertél");
                        }
                    }
                    this.#kattintottMezo=null
                }
            }
        })  
    }
    gepLep(){
        setTimeout(() => {
            if(this.ellenorzes(-1)){
                console.log("geplep");
                this.#kor++
            }else{
                console.log("vesztettél");
            }
        }, 1000);
    }
    
    ellenorzes(jatekos){
        let ix=0
        while(ix<3 && this.#mezoLista[(jatekos==1?0:6)+ix].babu!=jatekos)
            ix++
        
        return ix>=3
    }
}