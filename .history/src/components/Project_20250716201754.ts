import type {IProjectData} from "../types/IProjectData";

const autoScope = ['/src/blocks/Card/2/card.css'];

export default class Project 
{
    data:IProjectData;

    constructor (parent:Element, data : IProjectData)
    {
        this.data = data;

        parent.innerHTML = this.getScopedHtml ();
    }

    getScopedHtml ()
    {
        return `<article class="card">
                <img
                  class="img"
                  src="${this.data.image}"
                  alt=""
                />
                <div class="content">
                  <h3 class="title">${this.data.title}</h3>
                  <p class="body">
                    ${this.data.description}
                  </p>
                </div>
              </article>`
    }
}