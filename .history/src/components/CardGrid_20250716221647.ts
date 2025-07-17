
export default class CardGrid<TCard, IData>
{
    el:Element;
    CardClass: new (parent:Element, data:IData) => TCard;
    dataType:string;
    type:string;

    constructor (dataType:string, CardClass: new (parent:Element, data:IData) => TCard, type:string, el:Element)
    {
        this.el = el;
        this.dataType = dataType;
        this.type = type;
        this.CardClass = CardClass;
        this.init ();
    }

    async init ()
    {
        await this.instantiateCards ();
    }

    async loadData () : Promise<IData[]>
{
    console.log (this.dataType, this.type);
    const res = await fetch (`/data/${this.dataType}/${this.type}.json`);

    return await res.json();
}

async instantiateCards() : Promise<void>
{
    const cardsData = await this.loadData ();

    for(const cardData of cardsData)
    {
        const li = document.createElement ('li');
        li.className = 'grid-item';
        const link = document.createElement ('a');
        link.classList.add ('u-link');
        link.classList.add ('u-full-height');
        li.appendChild (link);
        this.el.appendChild (li);
        new this.CardClass (link, cardData);
    }
}


}


