import type { IData } from "../types/IData";


export default class Card 
{
    data:IData;

    constructor (parent:Element, data : IData)
    {
        this.data = data;

        parent.innerHTML = this.getScopedHtml ();
    }

    getScopedHtml ()
    {
        return ``;
    }
}