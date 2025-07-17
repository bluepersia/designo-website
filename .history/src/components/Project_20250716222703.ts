import type {IProjectData} from "../types/IProjectData";
import Card from "./Card";

const autoScope = ['src/css/blocks/Card/2/card.css'];
autoScope;

export default class Project extends Card<IProjectData>
{
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