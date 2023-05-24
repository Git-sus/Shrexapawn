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
        this.#allas === allas;
    }
}

export default GyufasDoboz;