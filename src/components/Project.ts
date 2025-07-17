import type { IProjectData } from "../types/IProjectData";

/* @ts-ignore */
const autoScope = ['/src/css/blocks/Card/2/card.css'];

export default class Project 
{
    data: IProjectData;
    constructor (data:IProjectData)
    {
        this.data = data;
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