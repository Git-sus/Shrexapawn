class Statisztika{
   
    
    #jatekosElem;
    #gepElem;
    
    #gepGyozelmekSzama
    #jatekosGyozelmekSzama
    #gepLepesek
    #szinek=[]

    constructor(){
        this.#jatekosElem = $("#jatekos");
        this.#gepElem = $("#gep");

        this.#gepGyozelmekSzama=0
        this.#jatekosGyozelmekSzama=0
        this.#gepLepesek=[]
        this.#szinek=[{nev:"piros",kod:"#B22222"},{nev:"sárga",kod:"#FF8C00"},{nev:"zöld",kod:"#808000"},{nev:"kék",kod:"#20B2AA"}]
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
        let tmp=""
        this.#gepLepesek[this.#gepLepesek.length-1].forEach(element => {
            console.log("dsél",element[1]);
            tmp+=`
            <div class="eredmeny">
                <div class=lepes>
                    ${String.fromCharCode(97+Math.floor(element[0].lepesek[element[1]][1]/3))+(element[0].lepesek[element[1]][1]%3+1)}</div>
                <div class="minitablaBox">
                    <div class="minitabla">
                        ${this.minitablaGeneral(element)}
                    </div>
                    <p>Valasztott szín: <span style="color:${this.#szinek[element[1]].kod}">${this.#szinek[element[1]].nev}</span></p>
                </div>
            </div>`
        });
        $("ol").eq(0).append(`<li>${tmp}</li>`)
        $("li:last > *").on("mousemove", function(event){
            jQuery(this).children(".minitablaBox").css("top", event.pageY-10-jQuery(this).children(".minitablaBox").height()/2)
            jQuery(this).children(".minitablaBox").css("left", minitablaBoxIrany(event, jQuery(this).children(".minitablaBox")))
        
            function minitablaBoxIrany(event, box){
                if(event.pageX+box.width()+20<window.innerWidth)
                    return event.pageX+20
                else if(event.pageX-box.width()-40>0)
                    return event.pageX-40-box.width()
                box.css("top", event.pageY-box.height()-40)    
                return event.pageX-120
            }
        })
       
    }

    minitablaGeneral(element){
        let tmp=""
        for (let ix = 0; ix < 9; ix++) {
           tmp+=`<div>
           ${element[0].allas[ix]==0?"":element[0].allas[ix]}
           </div>`
        }
        return tmp+this.nyilGeneral(element)
    }

    nyilGeneral(element){
        let tmp=""
        for (let ix = 0; ix < element[0].lepesek.length; ix++) {
            // console.log((element[0].lepesek[ix][0]%3)-(element[0].lepesek[ix][1]%3));
            // console.log(((element[0].lepesek[ix][0]%3)-(element[0].lepesek[ix][1]%3)));
            let irany=(element[0].lepesek[ix][0]%3)-(element[0].lepesek[ix][1]%3)
            tmp+=`
            <svg style="top: ${Math.floor(element[0].lepesek[ix][0]/3)*(128/3)+(128/6)}px;left: ${(element[0].lepesek[ix][0]%3)*(128/3)+(-irany*128/6)}px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <defs>
                    <marker id="arrowhead${ix}" markerWidth="10" markerHeight="7"
                    refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 7 3.5, 0 7" fill="${this.#szinek[ix].kod}"/>
                    </marker>
                </defs>
                <line x1="${irany*50+100}" y1="25" x2="${-irany*50+100}" y2="150" stroke="${this.#szinek[ix].kod}" 
                stroke-width="8" marker-end="url(#arrowhead${ix})" />
            </svg>
             `
        }
        //<line x1="50" y1="50" x2="400" y2="400" stroke="#000" 
        return tmp
    }
}

export default Statisztika