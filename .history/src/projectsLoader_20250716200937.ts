import Project from "./components/Project";
import type IProjectData from "./types/IProjectData";

async function loadProjects (type:string) : Promise<IProjectData[]>
{
    const res = await fetch (`/data/projects/${type}.json`);

    return await res.json();
}

export default async function instantiateProjects (type:string, parent:Element) : Promise
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


