class Mezo
{
    #index
    #babu
    #divElem

    constructor(szuloElem, index)
    {
        this.#index = index;
        this.#babu = Math.floor(index / 3) - 1;
        $(szuloElem).append(`<div>
        <img src="${(this.#babu === -1 ? "shrek.png" : this.#babu === 1 ? "donkey.png" : "")}">
        </div>`);
        this.#divElem = $(szuloElem).children("div:last-child");
        this.#divElem.on("click", () => this.esemenyTrigger());
    }

    get babu()
    {
        return this.#babu;
    }

    set babu(babu)
    {
        this.#babu = babu;
        this.#divElem.html(`<div>
        <img src="${(this.#babu === -1 ? "shrek.png" : this.#babu === 1 ? "donkey.png" : "")}">
        </div>`);
    }

    get index()
    {
        return this.#index;
    }

    get divElem()
    {
        return this.#divElem;
    }

    legalisLepes(masikMezo)
    {
        return this.#babu !== 0 && masikMezo.babu === 0 && this.index - 3 * this.#babu === masikMezo.index;
    }

    legalisTamadas(masikMezo)
    {
        return masikMezo !== undefined && masikMezo.babu === -this.#babu && (this.index - 3 * this.#babu === masikMezo.index + 1 || this.index - 3 * this.#babu === masikMezo.index - 1) && Math.floor(this.#index / 3) - this.#babu === Math.floor(masikMezo.index / 3);
    }

    csere(masikMezo)
    {
        masikMezo.babu = this.babu;
        this.babu = 0;
        new Audio("move.mp3").play()
    }

    esemenyTrigger()
    {
        window.dispatchEvent(new CustomEvent("elemValaszt", { detail: this }));
    }
}

export default Mezo;