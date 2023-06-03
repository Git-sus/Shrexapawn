import GyufasDoboz from "./GyufasDoboz.js";
import Mezo from "./Mezo.js";

/*
 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8
*/

class Jatekter
{
    #mainElem;

    #kor;
    #kattintottMezo;

    #gyufasDobozok = [];
    #mezoLista = [];
    #gepLepesei = [];

    constructor()
    {
        this.#mainElem = $("main"); 

        this.#kor = 1;
        this.#mezoLista = [];
        for (let i = 0; i < 9; i++)
        {
            this.#mezoLista.push(new Mezo("main", i));
        }
        this.#kattintottMezo = null;
        this.#gepLepesei = [];
       
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
                 1, -1, -1,
                 0,  0,  0
           ], [
               [4, 7],
               [5, 8]
           ])
        ]);
    }

    #mezoListaToString()
    {
        let tmp = "";
        this.#mezoLista.forEach(element => tmp += element.babu);
        return tmp;
    }

    async #jatekosLep()
    {
        
        let func = (self) =>{
            return new Promise(function(valasz){
                // console.log(bruh);
                $(window).on("elemValaszt", event => {
                    if (self.#kor % 2 && !(self.#kattintottMezo === null && event.detail.babu === -1))
                    { 
                        if (self.#kattintottMezo === null && event.detail.babu === 1)
                        {
                            self.#kattintottMezo = event.detail;
                            self.#kattintottMezo.divElem.css("border", "5px solid green");
                        }
                        else
                        {
                            if (self.#kattintottMezo.babu === 1 && event.detail.babu === 1)
                            {
                                self.#kattintottMezo.divElem.css("border", "1px solid black");
                                self.#kattintottMezo=event.detail;
                                self.#kattintottMezo.divElem.css("border", "5px solid green");
                            }
                            else if (self.#kattintottMezo.legalisLepes(event.detail) || self.#kattintottMezo.legalisTamadas(event.detail))
                            {
                                self.#kattintottMezo.divElem.css("border", "1px solid black");
                                self.#kattintottMezo.csere(event.detail);
                                self.#kor++;
                                if (self.#ellenorzes(1))
                                {
                                    let a= self.#gepLep()
                                    .then(adat=>{
                                        //console.log("AAAAAAAAAAAAAAAAAAA",adat)
                                        if(adat==-1)
                                            valasz([adat, self.#gepLepesei])
                                    })
                                }
                                else
                                {
                                    console.warn("nyertél");
                                    self.#tanul();
                                    valasz([1, self.#gepLepesei])
                                }
                                self.#kattintottMezo = null;
                            }
                        }
                    }
                })
            })
        }
        return await func(this)
    }

    
    #gepLep()
    {
        let func = (self) =>{
            return new Promise(function(valasz){
                // console.log(bruh);
                setTimeout(() => {
                    let allas = self.#mezoListaToString();
                    let i = 0;
                    while (allas !== self.#gyufasDobozok[self.#kor / 2 - 1][i].allas.join(""))
                    {
                        i++;
                    }
                    let rndLepes = Math.floor(Math.random() * self.#gyufasDobozok[self.#kor / 2 - 1][i].lepesek.length);
                    console.log("geplep");
                    self.#gepLepesei.push([self.#gyufasDobozok[self.#kor / 2 - 1][i], rndLepes]);
                    self.#mezoLista[self.#gyufasDobozok[self.#kor / 2 - 1][i].lepesek[rndLepes][0]].csere(self.#mezoLista[self.#gyufasDobozok[self.#kor / 2 - 1][i].lepesek[rndLepes][1]]);
                    if (self.#ellenorzes(-1))
                    {
                        self.#kor++;
                        valasz(0)
                    }
                    else
                    {
                        console.error("vesztettél");
                        self.#mezoLista[self.#gyufasDobozok[self.#kor / 2 - 1][i].lepesek[rndLepes][1]].divElem.css("border", "5px solid red");
                        valasz(-1)
                    }
                }, 1000);
            })
        }
        return func(this)
    }
    
    #ellenorzes(jatekos)
    {
        return this.#celbaErte(jatekos) && this.#vanBabue(jatekos) && this.#vanLegallisLepese(jatekos)
    }

    #celbaErte(jatekos){
        let i = 0;
        while (i < 3 && this.#mezoLista[(jatekos === 1 ? 0 : 6) + i].babu !== jatekos)
        {
            i++;
        }
        return i>=3;
    }

    #vanBabue(jatekos){
        let i = 0;
        while (i < this.#mezoLista.length && jatekos !== -this.#mezoLista[i].babu)
        {
            i++;
        }
        return i < this.#mezoLista.length;
    }

    #vanLegallisLepese(jatekos){
        let i = 0;
        let ideMajdKellEgyJobbNev=(jatekos === 1 ? 0 : 3)
        while (i < this.#mezoLista.length-3 && 
        !((this.#mezoLista[ideMajdKellEgyJobbNev + i].legalisLepes(this.#mezoLista[(ideMajdKellEgyJobbNev + i) + 3 * jatekos])) ||
        this.#mezoLista[ideMajdKellEgyJobbNev + i].legalisTamadas(this.#mezoLista[(ideMajdKellEgyJobbNev + i) + 3 * jatekos + 1]) ||
        (this.#mezoLista[ideMajdKellEgyJobbNev + i].legalisTamadas(this.#mezoLista[(ideMajdKellEgyJobbNev + i) + 3 * jatekos - 1]))))
        {
            i++;
        }
        return i < this.#mezoLista.length - 3;
    }
    
    #tanul()
    {
        let i = this.#gepLepesei.length;
        do
        {
            i--;
            this.#gepLepesei[i][0].torol(this.#gepLepesei[i][1]);
        }
        while (this.#gepLepesei[i][0].lepesek.length === 0);
        console.log(("sus ") + i);
        console.log(this.#gyufasDobozok);
    }

    async valasz(){
        return this.#jatekosLep()
    }

    destructor(){
        this.#mainElem.html("");
    }
}

export default Jatekter;