import type { IData } from "../types/IData";


export default class Card<TData>
{
    data:TData;

    constructor (parent:Element, data : TData)
    {
        this.data = data;

        parent.innerHTML = this.getScopedHtml ();
    }

    getScopedHtml ()
    {
        return ``;
    }
}