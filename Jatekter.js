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
    #kattintottMezo
    #gepLepesei=[]
    #gepNyer=0
    #jatekosNyer=0

    constructor(){    
        // this.#kor=1
        // for (let ix = 0; ix < 9; ix++) {
        //     this.#mezoLista.push(new Mezo("main",ix))  
        // }
        // this.#mezoLista=[]
        // this.#kattintottMezo=null
        // this.jatekosLep()
    
        this.general()
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
                [5, 7],
                [5, 8]
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
        general(){
            $("main").html("")
            
            $("#jatekos").css("width","calc( "+(this.#jatekosNyer/(this.#jatekosNyer+this.#gepNyer)*100)+"% )")
            $("#gep").css("width","calc( "+(this.#gepNyer/(this.#jatekosNyer+this.#gepNyer)*100)+"% )")
            $("#jatekos").html((this.#jatekosNyer)?("játékos: "+this.#jatekosNyer):"")
            $("#gep").html((this.#gepNyer)?("gép: "+this.#gepNyer):"")
            this.#kor=1
            this.#mezoLista=[]
            for (let ix = 0; ix < 9; ix++) {
                this.#mezoLista.push(new Mezo("main",ix))  
            }
            this.#kattintottMezo=null
            this.#gepLepesei=[]
            // console.log(this.#gyufasDobozok);
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
                            //console.log(this.#gepLepesei);
                            //console.log(this.#gyufasDobozok[this.#gepLepesei.length-1][this.#gepLepesei[this.#gepLepesei.length-1][0]].lepesek)
                            this.tanul()
                            this.#jatekosNyer++
                            this.general()
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
                //console.log(this.#gyufasDobozok);
                //console.log(rndLepes);
                //console.log(this.#gyufasDobozok[this.#kor/2-1][ix].lepesek);
                this.#gepLepesei.push([ix, rndLepes])
                //console.log(this.#gepLepesei);
                this.#mezoLista[this.#gyufasDobozok[this.#kor/2-1][ix].lepesek[rndLepes][0]].csere(this.#mezoLista[this.#gyufasDobozok[this.#kor/2-1][ix].lepesek[rndLepes][1]])

            if(this.ellenorzes(-1)){
                this.#kor++
            }else{
                console.error("vesztettél");
                this.#gepNyer++
                this.general()
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
                // console.log("legal lepes "+ (this.#mezoLista[(jatekos==1?0:3)+ix].LegalisLepes(this.#mezoLista[((jatekos==1?0:3)+ix) + 3 * jatekos ])));
                // console.log("jobb tam "+this.#mezoLista[(jatekos==1?0:3)+ix].LegalisTamadas(this.#mezoLista[((jatekos==1?0:3)+ix) + 3 * jatekos +1]))
                // console.log("bal tam "+ (this.#mezoLista[(jatekos==1?0:3)+ix].LegalisTamadas(this.#mezoLista[((jatekos==1?0:3)+ix) + 3 * jatekos -1])));
                // console.log(this.#mezoLista[(jatekos==1?0:3)+ix]);
                // console.log("🐱🔫");
                // console.log();
                ix++
            }
        //console.log("utolso ix: "+ix);
        return ix<this.#mezoLista.length-3
    }

    tanul(){
        let ix=-1
        do{
            ix++
            this.#gyufasDobozok[this.#gepLepesei.length-1-ix][this.#gepLepesei[this.#gepLepesei.length-1-ix][0]].lepesek.splice(this.#gepLepesei[this.#gepLepesei.length-1-ix][1],1)
        }
        while(this.#gyufasDobozok[this.#gepLepesei.length-1-ix][this.#gepLepesei[this.#gepLepesei.length-1-ix][0]].lepesek.length==0);
        console.log(("sus ")+ix);
        console.log(this.#gyufasDobozok);
    }
}