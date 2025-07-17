import Project from "./Project";
import type {IProjectData} from "../types/IProjectData";

export default class ProjectGrid 
{
    el:Element;
    constructor (type:string, el:Element)
    {
        this.el = el;
        
        this.init (type);
    }

    async init (type:string)
    {
        await instantiateProjects (type, this.el);
    }
}

async function loadProjects (type:string) : Promise<IProjectData[]>
{
    const res = await fetch (`/data/projects/${type}.json`);

    return await res.json();
}

async function instantiateProjects (type:string, parent:Element) : Promise<void>
{
    const projectsData = await loadProjects (type);

    for(const projectData of projectsData)
    {
        const li = document.createElement ('li');
        li.className = 'grid-item';
        const link = document.createElement ('a');
        link.classList.add ('u-link');
        link.classList.add ('u-full-height');
        li.appendChild (link);
        parent.appendChild (li);
        new Project (link, projectData);
    }
}


