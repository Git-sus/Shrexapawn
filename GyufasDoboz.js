class GyufasDoboz
{
    allas;
    #lepesek;

    constructor(allas, lepesek)
    {
        this.allas = allas;
        this.#lepesek = lepesek;
    }

    get lepesek()
    {
        return this.#lepesek;
    }
}

export default GyufasDoboz;