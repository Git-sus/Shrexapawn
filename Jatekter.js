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
            console.log(this.mezoListaToString());
            if(this.#kor%2){
                if(ellenorzes()){
                    if(this.#kattintottMezo===null)
                        this.#kattintottMezo=event.detail
                    else{
                        if(this.#kattintottMezo.LegalisLepes(event.detail) || this.#kattintottMezo.LegalisTamadas(event.detail)){
                            this.#kattintottMezo.csere(event.detail)
                            this.#kor++
                            this.gepLep()
                        }
                        this.#kattintottMezo=null
                    }
                }
                else{
                    console.log("vesztettél");
                }
            }
        })  
    }
    gepLep(){
        setTimeout(() => {
            console.log("geplep");
            this.#kor++
        }, 2000);
    }

    ellenorzes(){
        //tdod
    }
}