class Statisztika{
   
    
    #jatekosElem;
    #gepElem;
    
    #gepGyozelmekSzama
    #jatekosGyozelmekSzama
    #gepLepesek

    constructor(){
        this.#gepGyozelmekSzama=0
        this.#jatekosGyozelmekSzama=0
        this.#gepLepesek=[]

        this.#jatekosElem = $("#jatekos");
        this.#gepElem = $("#gep");
    }

    ujAdat(ki, gepLepesek){
        if(ki==1)
            this.#jatekosGyozelmekSzama++
        else
            this.#gepGyozelmekSzama++
        this.#gepLepesek.push(gepLepesek)
        this.eredmenyMutat()
    }

    eredmenyMutat(){
       this.eredmenysav()
       this.eredmenyGepLista()
    }

    eredmenysav(){
        this.#jatekosElem.css("width", (this.#jatekosGyozelmekSzama / (this.#jatekosGyozelmekSzama + this.#gepGyozelmekSzama) * 100) + "%");
        this.#gepElem.css("width", (this.#gepGyozelmekSzama / (this.#jatekosGyozelmekSzama + this.#gepGyozelmekSzama) * 100) + "%");
        this.#jatekosElem.html(this.#jatekosGyozelmekSzama ? ("játékos: " + this.#jatekosGyozelmekSzama) : "");
        this.#gepElem.html(this.#gepGyozelmekSzama ? ("gép: " + this.#gepGyozelmekSzama) : "");
    }

    eredmenyGepLista(){
        //todo
        let tmp=""
        this.#gepLepesek[this.#gepLepesek.length-1].forEach(element => {
            tmp+=element[0].allas.join()+"||"
        });
        $("ol").eq(0).append(`<li>${tmp}</li>`)
        console.log(this.#gepLepesek[this.#gepLepesek.length-1][0][0].allas);
        
    }
}

export default Statisztika