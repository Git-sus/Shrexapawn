class GyufasDoboz
{
    #allas;
    #lepesek;

    constructor(allas, lepesek)
    {
        this.allas = allas;
        this.#lepesek = lepesek;
    }

    osszehasonlit(allas)
    {
        return this.#allas == allas;
    }

    get lepesek(){
        return this.#lepesek
    }
}

export default GyufasDoboz;