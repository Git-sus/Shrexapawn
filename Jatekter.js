import GyufasDoboz from "./GyufasDoboz";
import { Mezo } from "/Mezo.js";

/*
 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8
*/

export class Jatekter{

    #kattintottMezo=null
    #gyufasDobozok = [];

    constructor(){    
        for (let ix = 0; ix < 9; ix++) {
            new Mezo("main",ix)
        }
        
        $(window).on("elemValaszt",event =>{
            if(this.#kattintottMezo===null)
                this.#kattintottMezo=event.detail
            else{
                if(this.#kattintottMezo.LegalisLepes(event.detail) || this.#kattintottMezo.LegalisTamadas(event.detail)){
                    this.#kattintottMezo.csere(event.detail)
                }
                this.#kattintottMezo=null
            }
        })
        
        //2. indexű lépések

        this.#gyufasDobozok.push(
            /*
            -1 |-1 |-1
            ---+---+---
             1 | 0 | 0
            ---+---+---
             0 | 1 | 1
            */
            new GyufasDoboz([
                [1, 3],
                [1, 4],
                [3, 5]
            ]),
            /*
            -1 |-1 |-1
            ---+---+---
             0 | 0 | 1
            ---+---+---
             1 | 1 | 0
            */
            new GyufasDoboz([
                [0, 3],
                [1, 4],
                [1, 5]
            ]),
            /*
            -1 |-1 |-1
            ---+---+---
             0 | 1 | 0
            ---+---+---
             1 | 0 | 1
            */
            new GyufasDoboz([
                [0, 3],
                [0, 4],
                [2, 4],
                [2, 5]
            ])
        );

        //4. indexű lépések
        
        this.#gyufasDobozok.push(
            /*
            -1 | 0 |-1
            ---+---+---
            -1 | 1 | 0
            ---+---+---
             0 | 0 | 1
            */
            new GyufasDoboz([
                [0, 4],
                [2, 4],
                [2, 5],
                [3, 6]
            ]),
            /*
            -1 | 0 |-1
            ---+---+---
             0 | 1 |-1
            ---+---+---
             1 | 0 | 0
            */
            new GyufasDoboz([
                [0, 3],
                [0, 4],
                [2, 4],
                [5, 8]
            ]),
            /*
             0 |-1 |-1
            ---+---+---
             1 |-1 | 0
            ---+---+---
             0 | 0 | 1
            */
            new GyufasDoboz([
                [1, 3],
                [2, 5],
                [4, 7],
                [4, 8]
            ]),
            /*
            -1 |-1 | 0
            ---+---+---
             0 |-1 | 1
            ---+---+---
             1 | 0 | 0
            */
            new GyufasDoboz([
                [0, 3],
                [1, 5],
                [4, 6],
                [4, 7]
            ])
        );
    }
}