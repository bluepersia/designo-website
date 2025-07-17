import Project from "./Project";

export default class ProjectGrid
{
    type:string;
    el:HTMLUListElement;
    constructor (type:string, el:HTMLUListElement)
    {
        this.type = type;
        this.el = el;

        this.init ();
    }

    init ()
    {
        this.instantiateCards (this.type);   
    }


    async loadData (type:string)
    {
        const res = await fetch (`/data/projects/${type}.json`);

        return await res.json ();
    }

    async instantiateCards (type:string)
    {
        const projectsData = await this.loadData (type);

        for(const projectData of projectsData)
        {
            const li = document.createElement ('li');
            li.className = 'grid-item';

            const link = document.createElement ('a');
            link.className = 'u-link u-full-height';

            li.appendChild (link);
            this.el.appendChild (li);

            link.innerHTML = new Project (projectData).getScopedHtml();
        }
    }
}