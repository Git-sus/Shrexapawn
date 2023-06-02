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
    #gepGyozelmekSzama;
    #jatekosGyozelmekSzama;
    #kor;

    #kattintottMezo;

    #gyufasDobozok = [];
    #mezoLista = [];
    #gepLepesei = [];

    #mainElem;
    #jatekosElem;
    #gepElem;

    constructor()
    {
        this.#gepGyozelmekSzama = 0;
        this.#jatekosGyozelmekSzama = 0;
        this.#mainElem = $("main");
        this.#jatekosElem = $("#jatekos");
        this.#gepElem = $("#gep");
       
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

        this.general()
        this.jatekosLep()
    }

    general()
    {
        this.#mainElem.html("");
        this.#jatekosElem.css("width", (this.#jatekosGyozelmekSzama / (this.#jatekosGyozelmekSzama + this.#gepGyozelmekSzama) * 100) + "%");
        this.#gepElem.css("width", (this.#gepGyozelmekSzama / (this.#jatekosGyozelmekSzama + this.#gepGyozelmekSzama) * 100) + "%");
        this.#jatekosElem.html(this.#jatekosGyozelmekSzama ? ("játékos: " + this.#jatekosGyozelmekSzama) : "");
        this.#gepElem.html(this.#gepGyozelmekSzama ? ("gép: " + this.#gepGyozelmekSzama) : "");
        this.#kor = 1;
        this.#mezoLista = [];
        for (let i = 0; i < 9; i++)
        {
            this.#mezoLista.push(new Mezo("main", i));
        }
        this.#kattintottMezo = null;
        this.#gepLepesei = [];
    }

    mezoListaToString()
    {
        let tmp = "";
        this.#mezoLista.forEach(element => tmp += element.babu);
        return tmp;
    }

    jatekosLep()
    {
        $(window).on("elemValaszt", event => {
            if (this.#kor % 2 === 1 && !(this.#kattintottMezo === null && event.detail.babu !== 1))
            {
                if (this.#kattintottMezo === null && event.detail.babu === 1)
                {
                    this.#kattintottMezo = event.detail;
                    this.#kattintottMezo.divElem.css("border", "5px solid green");
                }
                else
                {
                    if (this.#kattintottMezo.babu === 1 && event.detail.babu === 1)
                    {
                        this.#kattintottMezo.divElem.css("border", "0px solid red");
                        this.#kattintottMezo=event.detail;
                        this.#kattintottMezo.divElem.css("border", "5px solid green");
                    }
                    else if (this.#kattintottMezo.legalisLepes(event.detail) || this.#kattintottMezo.legalisTamadas(event.detail))
                    {
                        this.#kattintottMezo.divElem.css("border", "0px solid red");
                        this.#kattintottMezo.csere(event.detail);
                        this.#kor++;
                        if (this.ellenorzes(1))
                        {
                            this.gepLep();
                        }
                        else
                        {
                            console.warn("nyertél");
                            this.tanul();
                            this.#jatekosGyozelmekSzama++;
                            setTimeout(() => this.general(), 1000);
                            
                        }
                        this.#kattintottMezo = null;
                    }
                }
            }
        });
    }

    gepLep()
    {
        setTimeout(() => {
            let allas = this.mezoListaToString();
            let i = 0;
            while (allas !== this.#gyufasDobozok[this.#kor / 2 - 1][i].allas.join(""))
            {
                i++;
            }
            let rndLepes = Math.floor(Math.random() * this.#gyufasDobozok[this.#kor / 2 - 1][i].lepesek.length);
            console.log("geplep");
            this.#gepLepesei.push([i, rndLepes]);
            this.#mezoLista[this.#gyufasDobozok[this.#kor / 2 - 1][i].lepesek[rndLepes][0]].csere(this.#mezoLista[this.#gyufasDobozok[this.#kor / 2 - 1][i].lepesek[rndLepes][1]]);
            if (this.ellenorzes(-1))
            {
                this.#kor++;
            }
            else
            {
                console.error("vesztettél");
                this.#gepGyozelmekSzama++;
                setTimeout(() => this.general(), 1000);
            }
        }, 1000);
    }
    
    ellenorzes(jatekos)
    {
        let i = 0;
        while (i < 3 && this.#mezoLista[(jatekos === 1 ? 0 : 6) + i].babu !== jatekos)
        {
            i++;
        }
        if (i < 3)
        {
            return false;
        }
        i = 0;
        while (i < this.#mezoLista.length && jatekos !== -this.#mezoLista[i].babu)
        {
            i++;
        }
        if (i >= this.#mezoLista.length)
        {
            return false;
        }
        /*i = 0;
        while (i < this.#mezoLista.length - 3 && 
        !((this.#mezoLista[(jatekos === 1 ? 0 : 3) + i].legalisLepes(this.#mezoLista[((jatekos === 1 ? 0 : 3) + i) + 3 * jatekos])) ||
        this.#mezoLista[(jatekos === 1 ? 0 : 3) + i].legalisTamadas(this.#mezoLista[((jatekos === 1 ? 0 : 3) + i) + 3 * jatekos + 1]) ||
        (this.#mezoLista[(jatekos === 1 ? 0 : 3) + i].legalisTamadas(this.#mezoLista[((jatekos === 1 ? 0 : 3) + i) + 3 * jatekos - 1]))))
        {
            i++;
        }
        return i < this.#mezoLista.length - 3;*/
        i = 0;
        const szuksegesIndexekSzama = this.#mezoLista.length - 3;
        let jelenlegiMezoIndex = (jatekos === 1 ? 0 : 3) + i;
        let mezo = this.#mezoLista[jelenlegiMezoIndex];
        let kovetkezoMezoIndex = jelenlegiMezoIndex + 3 * jatekos;
        while (i < szuksegesIndexekSzama && !(mezo.legalisLepes(this.#mezoLista[kovetkezoMezoIndex]) || mezo.legalisTamadas(this.#mezoLista[kovetkezoMezoIndex + 1]) || mezo.legalisTamadas(this.#mezoLista[kovetkezoMezoIndex - 1])))
        {
            i++;
            mezo = this.#mezoLista[++jelenlegiMezoIndex];
            kovetkezoMezoIndex = jelenlegiMezoIndex + 3 * jatekos;
        }
        return i < szuksegesIndexekSzama;
    }

    tanul()
    {
        /*let i = 0;
        do
        {
            i++;
            this.#gyufasDobozok[this.#gepLepesei.length - i][this.#gepLepesei[this.#gepLepesei.length - i][0]].lepesek.splice(this.#gepLepesei[this.#gepLepesei.length - i][1], 1);
        }
        while (this.#gyufasDobozok[this.#gepLepesei.length - i][this.#gepLepesei[this.#gepLepesei.length - i][0]].lepesek.length === 0);*/
        let i = 1;
        let lepesek;
        do
        {
            const index = this.#gepLepesei.length - i++;
            const lepes = this.#gepLepesei[index];
            lepesek = this.#gyufasDobozok[index][lepes[0]].lepesek;
            lepesek.splice(lepes[1], 1);
        }
        while (lepesek.length === 0);
        console.log(("sus ") + i);
        console.log(this.#gyufasDobozok);
    }
}

export default Jatekter;