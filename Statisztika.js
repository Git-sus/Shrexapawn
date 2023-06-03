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
        console.log(this.#gepGyozelmekSzama,this.#jatekosGyozelmekSzama);
        this.eredmenyMutat()
    }

    eredmenyMutat(){
        this.#jatekosElem.css("width", (this.#jatekosGyozelmekSzama / (this.#jatekosGyozelmekSzama + this.#gepGyozelmekSzama) * 100) + "%");
        this.#gepElem.css("width", (this.#gepGyozelmekSzama / (this.#jatekosGyozelmekSzama + this.#gepGyozelmekSzama) * 100) + "%");
        this.#jatekosElem.html(this.#jatekosGyozelmekSzama ? ("játékos: " + this.#jatekosGyozelmekSzama) : "");
        this.#gepElem.html(this.#gepGyozelmekSzama ? ("gép: " + this.#gepGyozelmekSzama) : "");
    }
}

export default Statisztika