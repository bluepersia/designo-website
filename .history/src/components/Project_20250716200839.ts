import type IProjectData from "../types/IProjectData";

const autoScope = ['src/blocks/Card/2/card.css'];

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
        return `<article class="card" data-scope="2">
                <img
                  class="img"
                  src="/img/web-design/desktop/image-express.jpg"
                  alt=""
                />
                <div class="content">
                  <h3 class="title">Express</h3>
                  <p class="body">
                    A multi-carrier shipping website for ecommerce businesses
                  </p>
                </div>
              </article>`
    }
}