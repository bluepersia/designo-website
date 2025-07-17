import type { IData } from "../types/IData";
import Card from "./Card";

export default class CardGrid 
{
    el:Element;
    constructor (type:string, el:Element)
    {
        this.el = el;
        
        this.init (type);
    }

    async init (type:string)
    {
        await instantiateCards (type, this.el);
    }
}

async function loadData (dataType:string, type:string) : Promise<IData[]>
{
    const res = await fetch (`/data/${dataType}/${type}.json`);

    return await res.json();
}

async function instantiateCards (dataType:string, type:string, parent:Element) : Promise<void>
{
    const cardsData = await loadData (dataType, type);

    for(const cardData of cardsData)
    {
        const li = document.createElement ('li');
        li.className = 'grid-item';
        const link = document.createElement ('a');
        link.classList.add ('u-link');
        link.classList.add ('u-full-height');
        li.appendChild (link);
        parent.appendChild (li);
        new Card (link, cardData);
    }
}


