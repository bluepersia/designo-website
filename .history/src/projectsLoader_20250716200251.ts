import Project from "./components/Project";
import type IProjectData from "./types/IProjectData";

export async function loadProjects (type:string) : Promise<IProjectData[]>
{
    const res = await fetch (`/data/projects/${type}.json`);

    return await res.json();
}

async function instantiateProjects (type:string, parent:Element) : Promise
{
    const projectsData = await loadProjects (type);

    for(const projectData of projectsData)
        new Project (parent, projectData);
}


async function createProjectCard (data:IProjectData) : Promise<IProjectData>
{

}