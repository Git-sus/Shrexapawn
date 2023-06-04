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
                <div class="minitabla">
                    ${this.minitablaGeneral(element)}
                </div>
            </div>`
        });
        $("ol").eq(0).append(`<li>${tmp}</li>`)
        //console.log($("li:last > *").map(function(){return this}))
        $("li:last > *").on("mousemove", function(event){
            jQuery(this).children(".minitabla").css("top", event.pageY+5-jQuery(this).children(".minitabla").width()/2)
            jQuery(this).children(".minitabla").css("left", event.pageX+20)
        })
       
    }

    minitablaGeneral(element){
        let tmp=""
        for (let ix = 0; ix < 9; ix++) {
           tmp+=`<div>
           ${element[0].allas[ix]}
           </div>`
        }
        return tmp+this.nyilGeneral(element)
    }

    nyilGeneral(element){
        let tmp=""
        for (let ix = 0; ix < element[0].lepesek.length; ix++) {
            console.log((element[0].lepesek[ix][0]%3)-(element[0].lepesek[ix][1]%3));
            console.log(((element[0].lepesek[ix][0]%3)-(element[0].lepesek[ix][1]%3)));
            let irany=(element[0].lepesek[ix][0]%3)-(element[0].lepesek[ix][1]%3)
            tmp+=`
            <svg style="top: ${Math.floor(element[0].lepesek[ix][0]/3)*(128/3)+(128/6)}px;left: ${(element[0].lepesek[ix][0]%3)*(128/3)+(-irany*128/6)}px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7"
                    refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 7 3.5, 0 7" fill="red"/>
                    </marker>
                </defs>
                <line x1="${irany*50+100}" y1="25" x2="${-irany*50+100}" y2="150" stroke="#f00" 
                stroke-width="8" marker-end="url(#arrowhead)" />
            </svg>
             `
        }
        //<line x1="50" y1="50" x2="400" y2="400" stroke="#000" 
        return tmp
    }
}

export default Statisztika