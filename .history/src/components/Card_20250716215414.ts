import type { IData } from "../types/IData";


export default class Card<TData:IData>
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