class GyufasDoboz
{
    #allas;
    #lepesek;

    constructor(allas, lepesek)
    {
        this.#allas = allas;
        this.#lepesek = lepesek;
    }

    get allas()
    {
        return this.#allas
    }

    get lepesek()
    {
        return this.#lepesek;
    }

    torol(nth){
        this.lepesek.splice(nth, 1)
    }
}

export default GyufasDoboz;