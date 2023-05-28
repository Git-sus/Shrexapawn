import GyufasDoboz from "./GyufasDoboz.js";
import { Mezo } from "/Mezo.js";

/*
 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8
*/

export class Jatekter{

    #gyufasDobozok = [];
    #mezoLista=[]
    #kor
    #kattintottMezo=null
    
    constructor(){    
        this.#kor=1
        for (let ix = 0; ix < 9; ix++) {
            this.#mezoLista.push(new Mezo("main",ix))  
        }
        this.jatekosLep()
    


       
        //2. indexű lépések

        this.#gyufasDobozok.push([
            new GyufasDoboz([
                -1, -1, -1,
                 1,  0,  0,
                 0,  1,  1
            ], [
                [1, 3],
                [1, 4],
                [2, 5]
            ]),
            new GyufasDoboz([
                -1, -1, -1,
                 0,  0,  1,
                 1,  1,  0
            ], [
                [0, 3],
                [1, 4],
                [1, 5]
            ]),
            new GyufasDoboz([
                -1, -1, -1,
                 0,  1,  0,
                 1,  0,  1
            ], [
                [0, 3],
                [0, 4],
                [2, 4],
                [2, 5]
            ])
        ]);

        //4. indexű lépések
        
        this.#gyufasDobozok.push([
            new GyufasDoboz([
                -1,  0, -1,
                -1,  1,  0,
                 0,  0,  1
            ], [
                [0, 4],
                [2, 4],
                [2, 5],
                [3, 6]
            ]),
            new GyufasDoboz([
                -1,  0, -1,
                 0,  1, -1,
                 1,  0,  0
            ], [
                [0, 3],
                [0, 4],
                [2, 4],
                [5, 8]
            ]),
            new GyufasDoboz([
                 0, -1, -1,
                 1, -1,  0,
                 0,  0,  1
            ], [
                [1, 3],
                [2, 5],
                [4, 7],
                [4, 8]
            ]),
            new GyufasDoboz([
                -1, -1,  0,
                 0, -1,  1,
                 1,  0,  0
            ], [
                [0, 3],
                [1, 5],
                [4, 6],
                [4, 7]
            ]),
            new GyufasDoboz([
                -1,  0, -1,
                 1,  1,  0,
                 0,  1,  0
            ], [
                [0, 4],
                [2, 4],
                [2, 5]
            ]),
            new GyufasDoboz([
                -1,  0, -1,
                 0,  1,  1,
                 0,  1,  0
            ], [
                [0, 3],
                [0, 4],
                [2, 4]
            ]),
            new GyufasDoboz([
                -1, -1,  0,
                 1,  0,  1,
                 0,  0,  1
            ], [
                [1, 3],
                [1, 4],
                [1, 5]
            ]),
            new GyufasDoboz([
                 0, -1, -1,
                 1,  0,  1,
                 1,  0,  0
            ], [
                [1, 3],
                [1, 4],
                [1, 5]
            ]),
            new GyufasDoboz([
                 0, -1, -1,
                 0, -1,  1,
                 1,  0,  0
            ], [
                [1, 5],
                [4, 6],
                [4, 7]
            ]),
            new GyufasDoboz([
                -1, -1,  0,
                 1, -1,  0,
                 0,  0,  1
            ], [
                [1, 3],
                [4, 7],
                [4, 8]
            ]),
            new GyufasDoboz([
                 0, -1, -1,
                -1,  1,  1,
                 1,  0,  0
            ], [
                [1, 5],
                [2, 4]
            ]),
            new GyufasDoboz([
                -1, -1,  0,
                 1,  1, -1,
                 0,  0,  1
            ], [
                [0, 4],
                [1, 3]
            ]),
            new GyufasDoboz([
                -1,  0, -1,
                -1,  0,  1,
                 0,  1,  0
            ], [
                [3, 6],
                [3, 7]
            ]),
            new GyufasDoboz([
                -1,  0, -1,
                 1,  0, -1,
                 0,  1,  0
            ], [
                [6, 7],
                [6, 8]
            ]),
            new GyufasDoboz([
                 0, -1, -1,
                 0,  1,  0,
                 0,  0,  1
            ], [
                [2, 4],
                [2, 5]
            ]),
            new GyufasDoboz([
                -1, -1,  0,
                 0,  1,  0,
                 1,  0,  0
            ], [
                [0, 3],
                [0, 4]
            ]),
            new GyufasDoboz([
                0, -1, -1,
                0,  1,  0,
                1,  0,  0
            ], [
                [2, 4],
                [2, 5]
            ]),
            new GyufasDoboz([
                -1, -1,  0,
                 0,  1,  0,
                 0,  0,  1
            ], [
                [0, 3],
                [0, 4]
            ]),
            new GyufasDoboz([
                -1,  0, -1,
                 1,  0,  0,
                 0,  0,  1
            ], [
                [2, 5]
            ]),
            new GyufasDoboz([
                -1,  0, -1,
                 0,  0,  1,
                 1,  0,  0
            ], [
                [0, 3]
            ])
        ]);

        //6. indexű lépések

        this.#gyufasDobozok.push([
            new GyufasDoboz([
                 0,  0, -1,
                -1, -1,  1,
                 0,  0,  0
            ], [
                [3, 6],
                [4, 7]
            ]),
            new GyufasDoboz([
                 -1,  0,  0,
                 1, -1, -1,
                 0,  0,  0
            ], [
                [4, 7],
                [5, 8]
            ]),
            new GyufasDoboz([
                -1,  0,  0,
                 1,  1,  1,
                 0,  0,  0
            ], [
                [0, 4]
            ]),
            new GyufasDoboz([
                 0,  0, -1,
                 1,  1,  1,
                 0,  0,  0
            ], [
                [2, 4]
            ]),
            new GyufasDoboz([
                 0, -1,  0,
                -1,  1,  1,
                 0,  0,  0
            ], [
                [1, 5],
                [3, 6]
            ]),
            new GyufasDoboz([
                 0, -1,  0,
                 1,  1, -1,
                 0,  0,  0
            ], [
                [1, 3],
                [5, 8]
            ]),
            new GyufasDoboz([
                -1,  0,  0,
                -1, -1,  1,
                 0,  0,  0
            ], [
                [3, 6],
                [4, 7]
            ]),
            new GyufasDoboz([
                 0,  0, -1,
                -1,  1,  0,
                 0,  0,  0
            ], [
                [2, 4],
                [2, 5],
                [3, 6]
            ]),
            new GyufasDoboz([
                -1,  0,  0,
                 0,  1, -1,
                 0,  0,  0
            ], [
                [0, 3],
                [0, 4],
                [5, 8]
            ]),
            new GyufasDoboz([
                 0, -1,  0,
                 1, -1,  0,
                 0,  0,  0
            ], [
                [1, 3],
                [4, 7]
            ]),
            new GyufasDoboz([
                 0, -1,  0,
                 0, -1,  1,
                 0,  0,  0
            ], [
                [1, 5],
                [4, 7]
            ]),
            new GyufasDoboz([
                -1,  0,  0,
                -1,  1,  0,
                 0,  0,  0
            ], [
                [0, 4],
                [3, 6]
            ]),
            new GyufasDoboz([
                 0,  0, -1,
                 0,  1, -1,
                 0,  0,  0
            ], [
                [2, 4],
                [5, 8]
            ]),
            new GyufasDoboz([
                0,  0, -1,
                1,  -1, -1,
                0,  0,  0
           ], [
               [4, 7],
               [5, 8]
           ])
        ]);
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
            //console.log(this.ellenorzes(1));
            //console.log(this.mezoListaToString());
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
                            console.warn("nyertél");
                        }
                    }
                    this.#kattintottMezo=null
                }
            }
        })  
    }
    gepLep(){
        setTimeout(() => {
            let allas=this.mezoListaToString()
                let ix=0
                while(allas!=this.#gyufasDobozok[this.#kor/2-1][ix].allas.join(""))
                    ix++
                let rndLepes=Math.floor(Math.random()*this.#gyufasDobozok[this.#kor/2-1][ix].lepesek.length)
                console.log("geplep");
                console.log(rndLepes);
                this.#mezoLista[this.#gyufasDobozok[this.#kor/2-1][ix].lepesek[rndLepes][0]].csere(this.#mezoLista[this.#gyufasDobozok[this.#kor/2-1][ix].lepesek[rndLepes][1]])

            if(this.ellenorzes(-1)){
                this.#kor++
            }else{
                console.error("vesztettél");
            }
        }, 1000);
    }
    
    ellenorzes(jatekos){
        let ix=0
        while(ix<3 && this.#mezoLista[(jatekos==1?0:6)+ix].babu!=jatekos)
            ix++
        
        if(ix<3)
            return false
        
        ix=0
        while(ix<this.#mezoLista.length && -jatekos!=this.#mezoLista[ix].babu)
            ix++        
        //console.log(ix);
        if(ix>=this.#mezoLista.length)
            return false
        
        ix=0
        while(ix<this.#mezoLista.length-3 && 
            !(//this.#mezoLista[(jatekos==1?3:0)+ix].babu!=jatekos ||
            (this.#mezoLista[(jatekos==1?0:3)+ix].LegalisLepes(this.#mezoLista[((jatekos==1?0:3)+ix) + 3 * jatekos ])) ||
            this.#mezoLista[(jatekos==1?0:3)+ix].LegalisTamadas(this.#mezoLista[((jatekos==1?0:3)+ix) + 3 * jatekos +1]) ||
            (this.#mezoLista[(jatekos==1?0:3)+ix].LegalisTamadas(this.#mezoLista[((jatekos==1?0:3)+ix) + 3 * jatekos -1]))
            )){
                //console.log("azonos babu "+(this.#mezoLista[(jatekos==1?3:0)+ix].babu!=jatekos));
                console.log("legal lepes "+ (this.#mezoLista[(jatekos==1?0:3)+ix].LegalisLepes(this.#mezoLista[((jatekos==1?0:3)+ix) + 3 * jatekos ])));
                console.log("jobb tam "+this.#mezoLista[(jatekos==1?0:3)+ix].LegalisTamadas(this.#mezoLista[((jatekos==1?0:3)+ix) + 3 * jatekos +1]))
                console.log("bal tam "+ (this.#mezoLista[(jatekos==1?0:3)+ix].LegalisTamadas(this.#mezoLista[((jatekos==1?0:3)+ix) + 3 * jatekos -1])));
                console.log(this.#mezoLista[(jatekos==1?0:3)+ix]);
                console.log("🐱🔫");
                console.log();
                ix++
            }
        console.log("utolso ix: "+ix);
        return ix<this.#mezoLista.length-3
    }
}