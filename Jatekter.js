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
    #tablaElem;

    #kor;
    #kattintottMezo;

    static #gyufasDobozok = [];
    #mezoLista = [];
    #gepLepesei = [];
    static mind=[[],[],[]]
    static{

         //2. indexű lépések

        //  Jatekter.#gyufasDobozok.push([
        //     new GyufasDoboz([
        //         -1, -1, -1,
        //          1,  0,  0,
        //          0,  1,  1
        //     ], [
        //         [1, 3],
        //         [1, 4],
        //         [2, 5]
        //     ]),
        //     new GyufasDoboz([
        //         -1, -1, -1,
        //          0,  0,  1,
        //          1,  1,  0
        //     ], [
        //         [0, 3],
        //         [1, 4],
        //         [1, 5]
        //     ]),
        //     new GyufasDoboz([
        //         -1, -1, -1,
        //          0,  1,  0,
        //          1,  0,  1
        //     ], [
        //         [0, 3],
        //         [0, 4],
        //         [2, 4],
        //         [2, 5]
        //     ])
        // ]);

        // //4. indexű lépések
        
        // Jatekter.#gyufasDobozok.push([
        //     new GyufasDoboz([
        //         -1,  0, -1,
        //         -1,  1,  0,
        //          0,  0,  1
        //     ], [
        //         [0, 4],
        //         [2, 4],
        //         [2, 5],
        //         [3, 6]
        //     ]),
        //     new GyufasDoboz([
        //         -1,  0, -1,
        //          0,  1, -1,
        //          1,  0,  0
        //     ], [
        //         [0, 3],
        //         [0, 4],
        //         [2, 4],
        //         [5, 8]
        //     ]),
        //     new GyufasDoboz([
        //          0, -1, -1,
        //          1, -1,  0,
        //          0,  0,  1
        //     ], [
        //         [1, 3],
        //         [2, 5],
        //         [4, 7],
        //         [4, 8]
        //     ]),
        //     new GyufasDoboz([
        //         -1, -1,  0,
        //          0, -1,  1,
        //          1,  0,  0
        //     ], [
        //         [0, 3],
        //         [1, 5],
        //         [4, 6],
        //         [4, 7]
        //     ]),
        //     new GyufasDoboz([
        //         -1,  0, -1,
        //          1,  1,  0,
        //          0,  1,  0
        //     ], [
        //         [0, 4],
        //         [2, 4],
        //         [2, 5]
        //     ]),
        //     new GyufasDoboz([
        //         -1,  0, -1,
        //          0,  1,  1,
        //          0,  1,  0
        //     ], [
        //         [0, 3],
        //         [0, 4],
        //         [2, 4]
        //     ]),
        //     new GyufasDoboz([
        //         -1, -1,  0,
        //          1,  0,  1,
        //          0,  0,  1
        //     ], [
        //         [1, 3],
        //         [1, 4],
        //         [1, 5]
        //     ]),
        //     new GyufasDoboz([
        //          0, -1, -1,
        //          1,  0,  1,
        //          1,  0,  0
        //     ], [
        //         [1, 3],
        //         [1, 4],
        //         [1, 5]
        //     ]),
        //     new GyufasDoboz([
        //          0, -1, -1,
        //          0, -1,  1,
        //          1,  0,  0
        //     ], [
        //         [1, 5],
        //         [4, 6],
        //         [4, 7]
        //     ]),
        //     new GyufasDoboz([
        //         -1, -1,  0,
        //          1, -1,  0,
        //          0,  0,  1
        //     ], [
        //         [1, 3],
        //         [4, 7],
        //         [4, 8]
        //     ]),
        //     new GyufasDoboz([
        //          0, -1, -1,
        //         -1,  1,  1,
        //          1,  0,  0
        //     ], [
        //         [1, 5],
        //         [2, 4]
        //     ]),
        //     new GyufasDoboz([
        //         -1, -1,  0,
        //          1,  1, -1,
        //          0,  0,  1
        //     ], [
        //         [0, 4],
        //         [1, 3]
        //     ]),
        //     new GyufasDoboz([
        //         -1,  0, -1,
        //         -1,  0,  1,
        //          0,  1,  0
        //     ], [
        //         [3, 6],
        //         [3, 7]
        //     ]),
        //     new GyufasDoboz([
        //         -1,  0, -1,
        //          1,  0, -1,
        //          0,  1,  0
        //     ], [
        //         [5, 7],
        //         [5, 8]
        //     ]),
        //     new GyufasDoboz([
        //          0, -1, -1,
        //          0,  1,  0,
        //          0,  0,  1
        //     ], [
        //         [2, 4],
        //         [2, 5]
        //     ]),
        //     new GyufasDoboz([
        //         -1, -1,  0,
        //          0,  1,  0,
        //          1,  0,  0
        //     ], [
        //         [0, 3],
        //         [0, 4]
        //     ]),
        //     new GyufasDoboz([
        //          0, -1, -1,
        //          0,  1,  0,
        //          1,  0,  0
        //     ], [
        //         [2, 4],
        //         [2, 5]
        //     ]),
        //     new GyufasDoboz([
        //         -1, -1,  0,
        //          0,  1,  0,
        //          0,  0,  1
        //     ], [
        //         [0, 3],
        //         [0, 4]
        //     ]),
        //     new GyufasDoboz([
        //         -1,  0, -1,
        //          1,  0,  0,
        //          0,  0,  1
        //     ], [
        //         [2, 5]
        //     ]),
        //     new GyufasDoboz([
        //         -1,  0, -1,
        //          0,  0,  1,
        //          1,  0,  0
        //     ], [
        //         [0, 3]
        //     ])
        // ]);

        // //6. indexű lépések

        // Jatekter.#gyufasDobozok.push([
        //     new GyufasDoboz([
        //          0,  0, -1,
        //         -1, -1,  1,
        //          0,  0,  0
        //     ], [
        //         [3, 6],
        //         [4, 7]
        //     ]),
        //     new GyufasDoboz([
        //          -1,  0,  0,
        //          1, -1, -1,
        //          0,  0,  0
        //     ], [
        //         [4, 7],
        //         [5, 8]
        //     ]),
        //     new GyufasDoboz([
        //         -1,  0,  0,
        //          1,  1,  1,
        //          0,  0,  0
        //     ], [
        //         [0, 4]
        //     ]),
        //     new GyufasDoboz([
        //          0,  0, -1,
        //          1,  1,  1,
        //          0,  0,  0
        //     ], [
        //         [2, 4]
        //     ]),
        //     new GyufasDoboz([
        //          0, -1,  0,
        //         -1,  1,  1,
        //          0,  0,  0
        //     ], [
        //         [1, 5],
        //         [3, 6]
        //     ]),
        //     new GyufasDoboz([
        //          0, -1,  0,
        //          1,  1, -1,
        //          0,  0,  0
        //     ], [
        //         [1, 3],
        //         [5, 8]
        //     ]),
        //     new GyufasDoboz([
        //         -1,  0,  0,
        //         -1, -1,  1,
        //          0,  0,  0
        //     ], [
        //         [3, 6],
        //         [4, 7]
        //     ]),
        //     new GyufasDoboz([
        //          0,  0, -1,
        //         -1,  1,  0,
        //          0,  0,  0
        //     ], [
        //         [2, 4],
        //         [2, 5],
        //         [3, 6]
        //     ]),
        //     new GyufasDoboz([
        //         -1,  0,  0,
        //          0,  1, -1,
        //          0,  0,  0
        //     ], [
        //         [0, 3],
        //         [0, 4],
        //         [5, 8]
        //     ]),
        //     new GyufasDoboz([
        //          0, -1,  0,
        //          1, -1,  0,
        //          0,  0,  0
        //     ], [
        //         [1, 3],
        //         [4, 7]
        //     ]),
        //     new GyufasDoboz([
        //          0, -1,  0,
        //          0, -1,  1,
        //          0,  0,  0
        //     ], [
        //         [1, 5],
        //         [4, 7]
        //     ]),
        //     new GyufasDoboz([
        //         -1,  0,  0,
        //         -1,  1,  0,
        //          0,  0,  0
        //     ], [
        //         [0, 4],
        //         [3, 6]
        //     ]),
        //     new GyufasDoboz([
        //          0,  0, -1,
        //          0,  1, -1,
        //          0,  0,  0
        //     ], [
        //         [2, 4],
        //         [5, 8]
        //     ]),
        //     new GyufasDoboz([
        //          0,  0, -1,
        //          1, -1, -1,
        //          0,  0,  0
        //    ], [
        //        [4, 7],
        //        [5, 8]
        //    ])
        // ]);
        //console.log(this.#gyufasDobozok);

        Jatekter.a([-1,-1,-1,0,0,0,1,1,1],0, 1)
        Jatekter.#gyufasDobozok=[[],[],[]]

        for (let ix = 0; ix < 3; ix++) {
            Jatekter.mind[ix].forEach(element => {
                function multiDimensionalUnique(arr) {
                    var uniques = [];
                    var itemsFound = {};
                    for(var i = 0, l = arr.length; i < l; i++) {
                        var stringified = JSON.stringify(arr[i]);
                        if(itemsFound[stringified]) { continue; }
                        uniques.push(arr[i]);
                        itemsFound[stringified] = true;
                    }
                    return uniques;
                }
                console.log(multiDimensionalUnique(element.lepesek));
                Jatekter.#gyufasDobozok[ix].push(new GyufasDoboz(element.allas,multiDimensionalUnique(element.lepesek)))    
            });
        }
        console.log(Jatekter.#gyufasDobozok);
        $("#betolt").fadeTo(1000, 0, function(){
            $(this).hide() }); 
    }
    
    constructor()
    {
        this.#tablaElem = $("#tabla"); 

        this.#kor = 1;
        this.#mezoLista = [];
        for (let i = 0; i < 9; i++)
        {
            this.#mezoLista.push(new Mezo("#tabla", i));
        }
        this.#kattintottMezo = null;
        this.#gepLepesei = [];

        
    }

    

    static a(tomb, nth, kor){
        if(nth<tomb.length){
            // console.log(nth);
            let babu=tomb[nth]
            //console.log(kor, babu);
            if(babu!=0 && kor%2==(babu==-1?babu+1:babu)){
                //console.log(babu==0);
                if(babu!=0 && tomb[nth-3*babu]==0){//this.#babu !== 0 && masikMezo.babu === 0 && this.index - 3 * this.#babu === masikMezo.index;)
                    let asd=tomb.slice()
                    asd[nth-3*babu]=asd[nth]
                    // console.log(asd[nth]);
                    asd[nth]=0
                    console.log(asd);
                    if(babu==-1 && celbaerte(-1, asd) && celbaerte(1, asd)){
                        let talal=Jatekter.mind[kor/2-1].find(key=>{return key.allas.join("")==tomb.join("")})
                        if(talal==undefined)
                            Jatekter.mind[kor/2-1].push({allas:tomb,lepesek:[[nth,nth-3*babu]]})
                        else   
                            talal.lepesek.push([nth,nth-3*babu])
                    }
                    Jatekter.a(asd,0, kor+1)
                }
                if(babu!=0 && tomb[nth-3*babu+1]!=undefined && Math.floor((nth-3*babu+1)/3) == Math.floor(nth/3)-babu && tomb[nth-3*babu+1]==-babu){//masikMezo.babu === -this.#babu && (this.index - 3 * this.#babu === masikMezo.index + 1 
                    console.log(babu==0); // Math.floor(this.#index / 3) - this.#babu === Math.floor(masikMezo.index / 3);
                    let asd=tomb.slice()
                    asd[nth-3*babu+1]=asd[nth]
                    // console.log(asd[nth]);
                    asd[nth]=0
                    console.log(asd);
                    if(babu==-1 && celbaerte(-1, asd) && celbaerte(1, asd)){
                        let talal=Jatekter.mind[kor/2-1].find(key=>{return key.allas.join("")==tomb.join("")})
                        if(talal==undefined)
                            Jatekter.mind[kor/2-1].push({allas:tomb,lepesek:[[nth,nth-3*babu+1]]})
                        else   
                            talal.lepesek.push([nth,nth-3*babu+1])
                    }
                    Jatekter.a(asd,0, kor+1)
                }
                if(babu!=0 && tomb[nth-3*babu-1]!=undefined && Math.floor((nth-3*babu-1)/3) == Math.floor(nth/3)-babu && tomb[nth-3*babu-1]==-babu){//masikMezo.babu === -this.#babu && (this.index - 3 * this.#babu === masikMezo.index + 1 
                    console.log(babu==0); // Math.floor(this.#index / 3) - this.#babu === Math.floor(masikMezo.index / 3);
                    let asd=tomb.slice()
                    asd[nth-3*babu-1]=asd[nth]
                    // console.log(asd[nth]);
                    asd[nth]=0
                    console.log(asd);
                    if(babu==-1 && celbaerte(-1, asd) && celbaerte(1, asd)){
                        let talal=Jatekter.mind[kor/2-1].find(key=>{return key.allas.join("")==tomb.join("")})
                        if(talal==undefined)
                            Jatekter.mind[kor/2-1].push({allas:tomb,lepesek:[[nth,nth-3*babu-1]]})
                        else   
                            talal.lepesek.push([nth,nth-3*babu-1])
                    }
                    Jatekter.a(asd,0, kor+1)
                }
            }
            Jatekter.a(tomb,nth+1, kor)
        }
        console.log(Jatekter.mind);
        return tomb

        function celbaerte(ki, tabla) {
            if(ki==0)
                return false
            let i = 0;
            while (i < 3 && tabla[(ki === 1 ? 0 : 6) + i] !== ki)
            {
                i++;
            }
            if(i<3)
                console.log("i<3");
            return i>=3;
        }
    }

    #mezoListaToString()
    {
        let tmp = "";
        this.#mezoLista.forEach(element => tmp += element.babu);
        return tmp;
    }

    async #jatekosLep(self)
    {
        return new Promise(function(valasz){

            $(window).on("elemValaszt", event => {
                if (self.#kor % 2 && !(self.#kattintottMezo === null && event.detail.babu === -1))
                { 
                    if (self.#kattintottMezo === null && event.detail.babu === 1)
                    {
                        self.#kattintottMezo = event.detail;
                        self.#kattintottMezo.divElem.attr("id", "kivalasztMezo");
                    }
                    else
                    {
                        if (self.#kattintottMezo.babu === 1 && event.detail.babu === 1)
                        {
                            //self.#kattintottMezo.divElem.css("border", "1px solid black");
                            self.#kattintottMezo.divElem.removeAttr("id", "kivalasztMezo");
                            self.#kattintottMezo=event.detail;
                            self.#kattintottMezo.divElem.attr("id", "kivalasztMezo");
                        }
                        else if (self.#kattintottMezo.legalisLepes(event.detail) || self.#kattintottMezo.legalisTamadas(event.detail))
                        {
                            //self.#kattintottMezo.divElem.css("border", "1px solid black");
                            self.#kattintottMezo.divElem.removeAttr("id", "kivalasztMezo");
                            self.#kattintottMezo.csere(event.detail);
                            self.#kor++;
                            if (self.#ellenorzes(1))
                            {
                                setTimeout(() => {
                                    if(self.#gepLep()==-1)
                                        valasz({ki: -1, gepLepesei: self.#gepLepesei})
                                }, 1000);
                            }
                            else
                            {
                                let tmp=[]
                                self.#gepLepesei.forEach(element => {
                                    //element=element.slice()
                                    tmp.push({gyufasDoboz:new GyufasDoboz(element.gyufasDoboz.allas,element.gyufasDoboz.lepesek.slice()),lepesIndex: element.lepesIndex})
                                });
                                console.warn("nyertél");
                                event.detail.divElem.attr("id", "nyertMezo");
                                self.#tanul();
                                valasz({ki: 1, gepLepesei: tmp})
                            }
                            self.#kattintottMezo = null;
                        }
                    }
                }
            })
        })
    }

    
    #gepLep()
    {
        const allas = this.#mezoListaToString();
        const koronBeluliGyufasDobozok = Jatekter.#gyufasDobozok[this.#kor / 2 - 1];
        let i = 0;
        while (allas !== koronBeluliGyufasDobozok[i].allas.join(""))
        {
            i++
        }
        console.log("geplep");
        const rndLepesIndex = Math.floor(Math.random() * koronBeluliGyufasDobozok[i].lepesek.length);
        this.#gepLepesei.push({gyufasDoboz:koronBeluliGyufasDobozok[i], lepesIndex:rndLepesIndex});
        const rndLepes = koronBeluliGyufasDobozok[i].lepesek[rndLepesIndex];
        this.#mezoLista[rndLepes[0]].csere(this.#mezoLista[rndLepes[1]]);
        if (this.#ellenorzes(-1))
        {
            this.#kor++;
            return (0)
        }   
        console.error("vesztettél");
        this.#mezoLista[rndLepes[1]].divElem.attr("id", "veresegMezo");
        return (-1)
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
        const szuksegesIndexekSzama = this.#mezoLista.length - 3;
        let jelenlegiMezoIndex = (jatekos === 1 ? 0 : 3);
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
    
    #tanul()
    {
        let i = this.#gepLepesei.length;
        do
        {
            i--;
            console.log(this.#gepLepesei);
            this.#gepLepesei[i].gyufasDoboz.torol(this.#gepLepesei[i].lepesIndex);
        }
        while (this.#gepLepesei[i].gyufasDoboz.lepesek.length === 0);
    }

    async valasz(){
        return await this.#jatekosLep(this)
    }

    destructor(){
        this.#tablaElem.html("");
    }
}

export default Jatekter;