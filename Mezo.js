export class Mezo{
    #index
    #babu
    #divElem
    constructor(szuloElem, index){
        this.#index=index
        this.#babu=Math.floor(index/3)-1
        $(szuloElem).append("<div>"+(this.#babu==0?"":this.#babu)+"</div>")
        this.#divElem=$(szuloElem).children("div:last-child")
        
        this.#divElem.on("click", ()=>{
            this.esemenyTrigger()
        })
    }

    get babu(){
        return this.#babu
    }

    set babu(babu){
        this.#babu=babu
        this.#divElem.html((this.#babu==0?"":this.#babu))
    }

    get index(){
        return this.#index
    }

    LegalisLepes(masikMezo){
        return this.#babu!= 0 && masikMezo.babu == 0 && this.index - 3 * this.#babu == masikMezo.index
    }

    LegalisTamadas(masikMezo){
        return masikMezo!== undefined && masikMezo.babu == -this.#babu && (this.index - 3 * this.#babu == masikMezo.index + 1 || this.index - 3 * this.#babu == masikMezo.index - 1) && Math.floor(this.#index/3)-this.#babu==Math.floor(masikMezo.index/3)
    }

    csere(masikMezo){
        masikMezo.babu=this.babu
        this.babu=0
    }

    esemenyTrigger(){
        window.dispatchEvent(new CustomEvent("elemValaszt", {detail:this}))
    }
}