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
            console.log(element[0].lepesek[element[1]][1]);
            tmp+=`
            <div class="eredmeny">
                <div class=lepes>
                    ${String.fromCharCode(97+Math.floor(element[0].lepesek[element[1]][1]/3))+(element[0].lepesek[element[1]][1]%3+1)}</div>
                <div class="tabla">
                    ${this.minitablaGeneral(element)}
                </div>
            </div>`
        });
        $("ol").eq(0).append(`<li>${tmp}</li>`)
        //console.log($("li:last > *").map(function(){return this}))
        $("li:last > *").on("mousemove", function(event){
            jQuery(this).children(".tabla").css("top", event.pageY+10)
            jQuery(this).children(".tabla").css("left", event.pageX+10)
        })
       
    }

    minitablaGeneral(element){
        let tmp=""
        for (let ix = 0; ix < 9; ix++) {
            console.log("fkdhjl",element[0].allas);
           tmp+=`<div>
           ${element[0].allas[ix]}
           </div>`
        }
        return tmp
    }
}

export default Statisztika