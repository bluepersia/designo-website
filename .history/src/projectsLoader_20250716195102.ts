import type IProjectData from "./interfaces/IProjectData";

export default async function loadProjects (type:string) : IProjectData
{
    const res = await fetch (`/data/projects/${type}.json`);

    return await res.json();
}
