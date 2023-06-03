class Statisztika{
    
    #gep
    #jatekos
    #gepLepesek

    constructor(){
    this.#gep=0
    this.#jatekos=0
    this.#gepLepesek=[]
    }

    ujAdat(ki, gepLepesek){
        if(ki==1)
            this.#jatekos++
        else
            this.#gep++
        this.#gepLepesek.push(gepLepesek)

    }

    // eredmenyMutat(){
    //     this.#mainElem.html("");
    //     this.#jatekosElem.css("width", (this.#jatekosGyozelmekSzama / (this.#jatekosGyozelmekSzama + this.#gepGyozelmekSzama) * 100) + "%");
    //     this.#gepElem.css("width", (this.#gepGyozelmekSzama / (this.#jatekosGyozelmekSzama + this.#gepGyozelmekSzama) * 100) + "%");
    //     this.#jatekosElem.html(this.#jatekosGyozelmekSzama ? ("játékos: " + this.#jatekosGyozelmekSzama) : "");
    //     this.#gepElem.html(this.#gepGyozelmekSzama ? ("gép: " + this.#gepGyozelmekSzama) : "");
    // }
}

export default Statisztika