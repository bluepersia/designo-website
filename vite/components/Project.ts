import type { IProjectData } from "../types/IProjectData";

export default class Project 
{
    data: IProjectData;
    constructor (data:IProjectData)
    {
        this.data = data;
    }
    getScopedHtml ()
    {
        return `<article class="card-2">
        <img class="card-2__img" src="${this.data.image}" alt>
        <div class="card-2__content">
          <h3 class="card-2__title">${this.data.title}</h3>
          <p class="card-2__body">
            ${this.data.description}
          </p>
        </div>
      </article>`;
    }
}